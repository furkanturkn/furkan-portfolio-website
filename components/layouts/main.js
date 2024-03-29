import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hi, my name is Furkan, I am a mobile application developer and educational content creator. If you want to know more about me, come in!" />
        <meta name="author" content="Furkan Türkan" />
        <meta name="author" content="furkanturkan" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="android developer, furkanturkan, mobile developer, instructional designer"></meta>
        <meta name="language" content="English" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Furkan Türkan's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Furkan Türkan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
