import Logo from './logo'

import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeButton from './theme-toggle'
import { useRouter } from 'next/router'
import { useSelector, dispatch, useDispatch } from 'react-redux'
import { useToastHook } from './ToastComponent.jsx'
import { userLogout } from '../redux/actions/userAction'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.700', 'blue.50')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const router = useRouter()
  const tokenSelector = useSelector(state => state.userReducer.token)
  const [toast, newToast] = useToastHook()
  const dispatch = useDispatch()
  const tokenHandler = () => {
    dispatch(userLogout(tokenSelector, newToast))

    const redirect = () => {
      router.push('/')
    }
    setTimeout(redirect, 1500)
  }
  return (
    <Box
      bg={useColorModeValue('blue.50', 'gray.700')}
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      {router.asPath !== '/todo-app' ? (
        <Box {...props}>
          <Container
            display="flex"
            p={2}
            maxW="container.lg.md"
            wrap="wrap"
            align="center"
            justify="space-between"
          >
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                <Logo />
              </Heading>
            </Flex>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              flexGrow={1}
              alignItems="center"
              mt={{ base: 1, md: 0 }}
            >
              <LinkItem href="/works" path={path}>
                Works
              </LinkItem>
              <LinkItem href="/login" path={path}>
                Login
              </LinkItem>
            </Stack>

            <Box flex={1} align="right">
              <ThemeButton />
              <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <NextLink href="/" passHref>
                      <MenuItem as={Link}>Home</MenuItem>
                    </NextLink>
                    <NextLink href="/works" passHref>
                      <MenuItem as={Link}>Works</MenuItem>
                    </NextLink>
                    <NextLink href="/login" passHref>
                      <MenuItem as={Link}>Login</MenuItem>
                    </NextLink>
                    <NextLink href="https://github.com/jdbbdj" passHref>
                      <MenuItem as={Link}>Visit developer</MenuItem>
                    </NextLink>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box {...props}>
          <Container
            display="flex"
            p={2}
            maxW="container.lg.md"
            wrap="wrap"
            align="center"
            justify="space-between"
          >
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                <Logo />
              </Heading>
            </Flex>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              flexGrow={1}
              alignItems="center"
              mt={{ base: 1, md: 0 }}
            ></Stack>

            <Box flex={1} align="right">
              <Button onClick={e => tokenHandler()}>Logout</Button>
              <ThemeButton />
              <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label="Options"
                  />
                  <MenuList>
                    <NextLink href="/stats" passHref>
                      <MenuItem as={Link}>Stats</MenuItem>
                    </NextLink>
                    <NextLink href="https://github.com/jdbbdj" passHref>
                      <MenuItem as={Link} passHref>
                        Visit developer
                      </MenuItem>
                    </NextLink>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
