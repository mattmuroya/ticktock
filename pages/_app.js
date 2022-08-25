import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}

export default MyApp
