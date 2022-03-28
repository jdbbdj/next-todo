import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('blue.50', 'gray.700')(props)
    },
    span: {
      color: mode('gray.700', 'blue.50')(props),
      className: {
        'highlight-text': {
          color: 'red'
        }
      }
    }
  })
}

const components = {
  Box: {
    baseStyle: props => ({
      border: '1px solid white !important'
    })
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    },
    baseStyle: props => ({
      color: mode('gray.700', 'blue.50')(props),
      textUnderLineOffset: 3
    })
  },
  Link: {
    baseStyle: props => ({
      color: mode('gray.700', 'blue.50')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      color: mode('gray.700', 'blue.50')(props)
    })
  },
  MenuButton: {
    baseStyle: props => ({
      color: mode('gray.700', 'blue.50')(props),
      textUnderLineOffset: 3
    })
  },
  Button: {
    baseStyle: props => ({
      border: mode('gray.700', 'blue.50')(props),
      color: mode('gray.700', 'blue.50')(props)
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles
})

export default theme
