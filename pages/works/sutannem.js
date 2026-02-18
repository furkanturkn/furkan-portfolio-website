import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SütanneM">
    <Container>
      <Title>
        SütanneM <Badge>2021</Badge>
      </Title>
      <P>
        An application developed natively for Android and iOS. Features include chat, map integration, and user matching.
      </P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Android, iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Swift, Firebase</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/sutannem/sutannem_detail_1.png" alt="sutannem" />
        <WorkImage src="/images/works/sutannem/sutannem_main_1.png" alt="sutannem" />
        <WorkImage src="/images/works/sutannem/sutannem_login_1.png" alt="sutannem" />
        <WorkImage src="/images/works/sutannem/sutannem_map_1.png" alt="sutannem" />
        <WorkImage src="/images/works/sutannem/sutannem_profile_1.png" alt="sutannem" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
