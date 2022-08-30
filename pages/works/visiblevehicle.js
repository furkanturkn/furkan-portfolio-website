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
  <Layout title="VisibleVehicle">
    <Container>
      <Title>
        Visible Vehicle <Badge>2019</Badge>
      </Title>
      <P>An android-based social responsibility project that aims
         to increase the participation of disabled individuals in society by using public 
         transportation vehicles more easily.
         With the application in the vehicle, it is ensured that the driver understands that 
         there is a disabled person at the stop and behaves more cautiously. With the mobile application,
         disabled citizens can easily get public transport line information with voice commands and can 
         send information to the driver of the vehicle that will arrive at the stop. </P>

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
        <WorkImage src="/images/works/visible_vehicle_01.jpg" alt="Visible Vehicle" />
        <WorkImage src="/images/works/visible_vehicle_02.png" alt="Visible Vehicle" />
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Work
