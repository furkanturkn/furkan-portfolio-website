import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoMedium,
  IoLogoYoutube
} from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Mobile Application & SDK Developer · Istanbul, Türkiye
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Furkan Türkan
          </Heading>
          <p>Mobile Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/furkan.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2019 – 2024</BioYear>
          Computer Education & Instructional Technology at Bahçeşehir University.
        </BioSection>
        <BioSection>
          <BioYear>2019 – 2021</BioYear>
          Android Developer at Sekompos.
        </BioSection>
        <BioSection>
          <BioYear>2022 – 2023</BioYear>
          Android Developer at PayCore.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Android Developer at Verisoft (3 months).
        </BioSection>
        <BioSection>
          <BioYear>2023 – Present</BioYear>
          Android Developer at Simpra.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        🌱 I’m currently
        </Heading>
        <Paragraph>
          working at <Link href="https://simprasuite.com.tr/" target="_blank">Simpra</Link> as an Android Developer.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/furkanturkn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @furkanturkn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://youtube.com/@icodethis" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoYoutube} />}
              >
                @icodethis
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/furkanturkan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @furkanturkan
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@furkantrkn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoMedium} />}
              >
                @furkantrkn
              </Button>
            </Link>
          </ListItem>

        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
