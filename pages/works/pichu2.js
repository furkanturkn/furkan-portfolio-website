import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*pichu">
    <Container>
      <Title>
        Web to App <Badge>2019</Badge>
      </Title>
      <P>
      Native android app template that I developed for those who want to migrate 
      their websites to android application.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, MongoDB</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/pichu2_01.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
