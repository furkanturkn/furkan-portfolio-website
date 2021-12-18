import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My posts about Android
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Android RecyclerView Adapter Example — Multiple ViewTypes"
            thumbnail={thumbFishWorkflow}
            href="https://medium.com/@furkantrkn/android-recyclerview-adapter-örneği-multiple-çoklu-viewtypes-viewholders-75f5fa90dc8d"
          />
          <GridItem
            title="Android Drawable Vector Image Creation with SVG pathdata"
            thumbnail={thumbMyDeskSetup}
            href="https://medium.com/@furkantrkn/svg-pathdata-ile-android-drawable-vektörel-görsel-oluşturma-29267fbd6055"
          />
        </SimpleGrid>
      </Section>

      <a 
      href="https://medium.com/@furkantrkn"
      target="_blank"
      rel="noreferrer"
      as="h3" fontSize={30} mb={4}>
        Click to access all my articles on various topics!
      </a>
    </Container>
  </Layout>
)

export default Posts
