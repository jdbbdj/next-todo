import Section from '../components/section'
import { Container, Grid, GridItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const Success = () => {
  const router = useRouter()
  const redirect = () => {
    router.push('/login')
  }

  setTimeout(redirect, 1500)

  return (
    <Section>
      <Container align="center">
        <Grid templateColumns={`repeat(4, 1fr)`} templateRows="repeat(3, 1fr)">
          <GridItem colSpan={4} rowSpan={1}>
            <CheckCircleIcon w="100px" h="100px" />
          </GridItem>
          <GridItem colSpan={4} rowSpan={1}>
            Success
          </GridItem>
          <GridItem colSpan={4}>
            <NextLink href="/login" align="right" passHref>
              <Link>Redirect to login</Link>
            </NextLink>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  )
}

export default Success
