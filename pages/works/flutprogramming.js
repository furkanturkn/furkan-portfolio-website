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
          amembo <Badge>2005-2008</Badge>
        </Title>
        <iframe src="https://flutter.atakancelik.com.tr/#/" width="100%" height="900px"></iframe>
  
      </Container>
    </Layout>
  )
  
  export default Work
  