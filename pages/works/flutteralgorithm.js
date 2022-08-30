
  import Layout from '../../components/layouts/article'
  import {Heading} from '@chakra-ui/react'
  
  const Work = () => (
    <Layout title="amembo">
       <Heading as="h3" fontSize={20} mb={4}>
        Loading... pass in Mobile View or change window size for responsive view.
      </Heading>
      <iframe src="https://furkanturkn.github.io/algorithmweb/#/" style={{position:'fixed', top:'0', left:'0', bottom:'0', right:'0', width:'100%', height:'100%', border:'none', margin:'0', padding:'0', overflow:'hidden', zIndex:'999999'}}></iframe>
    </Layout>
  )
  
  
  export default Work
  