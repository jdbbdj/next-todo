import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../lib/font'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Fonts />
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
