import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Deveng Networking Module">
    <Container>
      <Title>
        Deveng Networking Module (KMP) <Badge>Open source</Badge>
      </Title>
      <P>
        Open-source Kotlin Multiplatform networking abstraction library for shared API and networking logic across Android, iOS, and other targets.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Kotlin Multiplatform</span>
        </ListItem>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/furkanturkn/deveng-networking-kmp" target="_blank" color="teal.500">
            github.com/furkanturkn/deveng-networking-kmp
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
