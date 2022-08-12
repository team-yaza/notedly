import Layout from "../components/Layout"
import "../styles/globals.css"
import GlobalStyle from "../styles/globalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
