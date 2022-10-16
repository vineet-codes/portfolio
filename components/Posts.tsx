import styled from "styled-components";
import {
  FaGreaterThan,
} from "react-icons/fa";
import Link from "next/link";

const PostsContainer = styled.div`
/* width: 95%; */
/* border: 1px solid tomato; */
@media screen and (min-width: 820px) {
  width: 75%;
  padding: 1rem;
}

.post {
  padding: 2em 0;
  @media screen and (min-width: 820px) {
    padding: 2em 1rem;
  }
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #202023;
  }
  .date {
    margin: 0;
    padding-left: 1em;
    font-size: 0.9rem;
    border-left: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    opacity: 40%;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
  h3 {
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    color: rgb(244 244 245);
    font-family: ${(props) => props.theme.fonts.headings};
    font-weight: 600;
  }

  p {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 300;
    font-size: 0.95rem;
    /* line-height: 119.9%; */
    /* letter-spacing: 0.05rem; */
    color: ${(props) => props.theme.colors.primary};
    opacity: 40%;
  }

  .read-more {
    margin-top: 0.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: rgb(20 184 166);
    p {
      opacity: 100%;
      color: rgb(20 184 166);
    }

    a {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
`;


const Posts = ({posts, all}) => {

  const blogposts = all ? posts : posts.slice(0,3);
  return (
    <PostsContainer>
        {blogposts.map((post) => (
          <div className="post" key={post.slug}>
            <p className="date">{post.frontmatter.publishedAt.slice(1,-1)}</p>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.summary}</p>
            <div className="read-more">
              <Link href={`/blog/${post.slug}`}>
                <a><span>Read More &#8594;</span></a>
              </Link>
            </div>
          </div>
        ))}
    </PostsContainer>
  )
}

export default Posts;