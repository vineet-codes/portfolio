import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

import readingTime from "reading-time";
import autolinkHeadings from "remark-autolink-headings";
import TOC from "remark-toc";
import rSlug from "remark-slug";
import codeTitle from "remark-code-titles";
import remarkCapitalize from "remark-capitalize";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(process.cwd(), "content/posts");

export const ComponentsInMdxPATH = path.join(
  process.cwd(),
  "content/components"
);

export async function getFiles(type) {
  return fs.readdirSync(path.join(ROOT, "content", type));
}

export const getFileContent = (filename) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((p) => /\.mdx?$/.test(p))
    .map((fileName) => {
      const source = getFileContent(fileName);
      // our slug is tied to the filename of mdx file
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      return { frontmatter: { ...data }, slug };
    });
};

export const getCompiledMDX = async (source) => {
  // Add your remark and rehype plugins here
  const remarkPlugins = [
    [TOC, { maxDepth: 2 }],
    codeTitle,
    rSlug,
    [autolinkHeadings, { behavior: "wrap" }],
    remarkCapitalize,
  ];

  // [rehypeMetaAttribute, rehypeHighlightCode];
  const rehypePlugins = [];

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: ComponentsInMdxPATH,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];

      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];
      return options;
    },
  });

  return {
    frontmatter,
    code,
  };
};

export const getSinglePost = async (slug) => {
  const source = getFileContent(`${slug}.mdx`);
  const { code, frontmatter } = await getCompiledMDX(source);

  return {
    frontMatter: {
      wordCount: code.split(/\s+/gu).length,
      readingTime: readingTime(code),
      slug: slug || null,
      ...frontmatter,
    },
    code,
  };
};
