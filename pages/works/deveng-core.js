import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Core UI Library (Compose)">
    <Container>
      <Title>
        Core UI Library (Compose) <Badge>Open source</Badge>
      </Title>
      <P>
        Reusable component system for standardized Jetpack Compose development. Part of the Deveng KMP ecosystem.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, Jetpack Compose</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/Deveng-Group/deveng-core-kmp" target="_blank" color="teal.500">
            github.com/Deveng-Group/deveng-core-kmp
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
