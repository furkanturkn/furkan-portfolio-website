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
      <iframe src="https://flutter.atakancelik.com.tr/#/" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
    </Layout>
  )
  
  export default Work
  