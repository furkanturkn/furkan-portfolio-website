import { Container, Heading, SimpleGrid, Divider, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'



import thumbSmartPark from '../public/images/works/smartpark_eyecatch.png'
import thumbSocialAkce from '../public/images/works/socialakce_eyecatch.png'
import thumbSutAnnem from '../public/images/works/sut-annem_eyecatch.jpg'
import thumbVisibleVehicle from '../public/images/works/visible-vehicle_eyecatch.png'
import thumbWebToApp from '../public/images/works/web-to-app_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="smartpark" title="Smart Park" thumbnail={thumbSmartPark}>
          A parking software running on payment terminals with Android operating system 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="socialakce"
            title="Social Akçe"
            thumbnail={thumbSocialAkce}
          >
            A shopping software developed for terminals with android operating system and printer used in social markets.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="sutannem"
            title="SütanneM"
            thumbnail={thumbSutAnnem}
          >
            A mobile application that aims to bring together mothers and those who need breast milk.
            A freelance project I wrote natively for Android and IOS. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Social Responsibility Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="visiblevehicle"
            thumbnail={thumbVisibleVehicle}
            title="Visible Vehicle"
          >
            An android-based social responsibility project that aims to increase 
            the participation of disabled individuals in society by using public transportation vehicles more easily. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="webtoapp" thumbnail={thumbWebToApp} title="Web to App">
          Native android app template that I developed for those who want to migrate their websites to android application. 
          Technologies used in the project are Java and mongoDB
          </WorkGridItem>

        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
