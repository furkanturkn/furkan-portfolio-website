import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbKtorRestApi from '../public/images/contents/youtube-ktor-restapi.jpg'
import thumbPlateScanner from '../public/images/contents/youtube-plate-scanner-thumb.jpg'
import thumbMediumRecyclerView from '../public/images/contents/medium-recycler-view.jpg'
import thumbMediumVectorDrawable from '../public/images/contents/medium-vector-drawable.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My videos about Android
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to create Kotlin Ktor RestAPI with MongoDB?"
            thumbnail={thumbKtorRestApi}
            href="https://youtu.be/VFDsYx-R_I8"
          />
          <GridItem
            title="MVVM Plate Scanner Android App"
            thumbnail={thumbPlateScanner}
            href="https://www.youtube.com/watch?v=G3pjrZhLCwE&list=PLmaWWI1_HUztFycSdvXGtUzX8NR0C9UGY"
          />
        </SimpleGrid>
      </Section>


      <Heading as="h3" fontSize={20} mb={4}>
        My posts about Android
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Android RecyclerView Adapter Example — Multiple ViewTypes"
            thumbnail={thumbMediumRecyclerView}
            href="https://medium.com/@furkantrkn/android-recyclerview-adapter-örneği-multiple-çoklu-viewtypes-viewholders-75f5fa90dc8d"
          />
          <GridItem
            title="Android Drawable Vector Image Creation with SVG pathdata"
            thumbnail={thumbMediumVectorDrawable}
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
