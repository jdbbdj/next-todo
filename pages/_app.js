import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import Fonts from '../lib/font'
import { Provider } from 'react-redux'
import store from '../redux/store'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Layout router={router}>
          <Fonts />
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default Website
