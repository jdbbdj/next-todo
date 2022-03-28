import React from 'react'
import Image from 'next/image'
import { Container, Box, useColorModeValue, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        display={['inline-block', 'inline-block', 'flex']}
        p={3}
        mb={6}
        borderColor={useColorModeValue('gray.700', 'blue.50')}
      >
        <Image height="300px" width="475px" src="/images/HI.png" />
        Hi this is a project consisting functionalities for the Next, Framer,
        and Chakra ui
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title" align="center">
            Todo-App | James Daryl
          </Heading>
          <p align="center">
            An aspiring full-stack developer with specialty in 3D animation and
            images
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
