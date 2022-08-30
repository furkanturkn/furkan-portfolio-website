import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="SmartPark">
    <Container>
      <Title>
        Smart Park <Badge>2020-</Badge>
      </Title>
      <P>
      A parking software running on payment terminals with Android operating system<br></br><br></br>
      • Vehicle photography<br></br>
      • Payment system<br></br>
      • Valet location and transaction tracking<br></br>
      • Vehicle transfer<br></br>
      • E-Archive integration 
      </P>
      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Java, MsSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/smartpark_01.png" alt="Smart Park" />
      <WorkImage src="/images/works/smartpark_02.png" alt="Smart Park" />
    </Container>
  </Layout>
)

export default Work
