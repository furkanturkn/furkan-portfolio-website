import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="camerax-mlkit-pack">
    <Container>
      <Title>
        camerax-mlkit-pack <Badge>Open source</Badge>
      </Title>
      <P>
        Open-source library for Android. Combines CameraX with ML Kit for camera and on-device ML use cases.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/furkanturkn/camerax-mlkit-pack" target="_blank" color="teal.500">
            github.com/furkanturkn/camerax-mlkit-pack
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
