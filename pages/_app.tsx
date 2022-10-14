import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import GlobalLayout from '../components/layout/GlobalLayout'

const theme: DefaultTheme = {
  colors: {
    primary: '#f3f3f3',
    secondary: '#0070f3',
  },
  fonts: {
    text: "'Nunito', sans-serif",
    headings: "'Nunito Sans', sans-serif"
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  )
}
