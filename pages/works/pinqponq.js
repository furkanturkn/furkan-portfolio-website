import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="pinqponq.io">
    <Container>
      <Title>
        pinqponq.io <Badge>2025 – Present</Badge>
      </Title>
      <P>Current project. October 2025 – Present.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Period</Meta>
          <span>October 2025 – Present</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
