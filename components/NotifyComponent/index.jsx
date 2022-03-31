import Section from '../section'
import { Container, Grid, GridItem, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const isBasic = true

const Notify = ({ isBasic, isFailed, message }) => {
  return (
    <>
      <Section>
        <Container align="center">
          <Grid
            templateColumns={`repeat(4, 1fr)`}
            templateRows="repeat(3, 1fr)"
          >
            <GridItem colSpan={4} rowSpan={1}>
              {isBasic && <CheckCircleIcon w="100px" h="100px" />}
              {isFailed && <NotAllowedIcon w="100px" h="100px" />}
            </GridItem>
            <GridItem colSpan={4} rowSpan={1}>
              {message}
            </GridItem>
            <GridItem colSpan={4}>
              <NextLink href="/login" align="right" passHref>
                <Link>Redirect to login</Link>
              </NextLink>
            </GridItem>
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Notify
