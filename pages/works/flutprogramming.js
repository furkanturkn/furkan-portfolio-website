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
        <iframe src="/works" width="100%"></iframe>
  
      </Container>
    </Layout>
  )
  
  export default Work
  