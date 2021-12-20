import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SocialAkce">
    <Container>
      <Title>
        Social Akçe <Badge>2020-2021</Badge>
      </Title>
      <P>
      A shopping software developed for terminals with android 
      operating system and printer used in social markets.<br></br>
      • Money transfer to social card and social card shopping transactions with NFC. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, MsSQL</span>
        </ListItem>
      </List>

  
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/sosyal_akce/social_akce_2.jpg" alt="walknote" />
        <WorkImage src="/images/works/sosyal_akce/social_akce_1.jpg" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
