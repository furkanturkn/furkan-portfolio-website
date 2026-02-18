import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Turan Gold">
    <Container>
      <Title>
        Turan Gold <Badge>2025</Badge>
      </Title>
      <P>
        A Kotlin Multiplatform (KMP) application delivering real-time gold prices and market tracking.
        Available on Android, iOS, and Web in Türkiye.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, iOS, Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin Multiplatform</span>
        </ListItem>
        <ListItem>
          <Meta>Period</Meta>
          <span>March 2025 – June 2025</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
