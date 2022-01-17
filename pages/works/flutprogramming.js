import {
    Container,
    Badge
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/work'
  
  const Work = () => (
    <Layout title="amembo">
      <Container>
        <Title>
          Variables Programming <Badge>2022</Badge>
        </Title>
      
  
      </Container>
      <iframe src="https://flutter.atakancelik.com.tr/#/" width="100%" height="700px"></iframe>
    </Layout>
  )
  
  export default Work
  