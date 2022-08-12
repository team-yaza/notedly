import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import Layout from "../components/Layout"
import "../styles/globals.css"
import GlobalStyle from "../styles/globalStyle"

const url = process.env.API_URL
const cache = new InMemoryCache({})

const client = new ApolloClient({
  url,
  cache,
  connectToDevTools: true,
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}

export default MyApp
