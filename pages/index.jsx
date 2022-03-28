import React from 'react'
import Image from 'next/image'
import { Container, Box, useColorModeValue, Heading } from '@chakra-ui/react'
import VoxelDog from '../components/threeglb/voxel-dog'
import Loader from '../components/three-loader'
import Section from '../components/section'
import dynamic from 'next/dynamic'
const LazyVoxelDog = dynamic(() => import('../components/threeglb/voxel-dog'), {
  ssr: false,
  loading: () => <Loader />
})
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
        <p align="center">
          Hi this is a project consisting functionalities for the Next, Framer,
          and Chakra ui
        </p>
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
      <Section delay="0.1">
        <LazyVoxelDog />
      </Section>

      <Section>
        <Container display={{ base: 'inline-block', md: 'flex' }}>
          <Box>
            <Image height="300px" width="475px" src="/images/Task2.png" />
            <p align="center">
              This app encourages you to think for the things that you wanna do,
              and identify the steps towards it.
            </p>
          </Box>
          <Box>
            <Image height="300px" width="475px" src="/images/Task3.png" />
            <p align="center">
              Clarity, and mental-breakthrough are both benefits of done tasks,
              due to dopamine brain chemicals
            </p>
          </Box>
        </Container>
      </Section>
    </Container>
  )
}

export default Page
