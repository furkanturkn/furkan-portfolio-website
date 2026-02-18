import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSmartPark from '../public/images/works/smartpark_eyecatch.png'
import thumbSocialAkce from '../public/images/works/socialakce_eyecatch.png'
import thumbSutAnnem from '../public/images/works/sut-annem_eyecatch.jpg'
import thumbPlaceholder from '../public/images/works/smartpark_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="logolog" title="logolog" thumbnail={thumbPlaceholder}>
            October 2025 – Present
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pinqponq" title="pinqponq.io" thumbnail={thumbPlaceholder}>
            October 2025 – Present
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="turangold" title="Turan Gold" thumbnail={thumbPlaceholder}>
            A Kotlin Multiplatform (KMP) application delivering real-time gold prices and market tracking. March 2025 – June 2025.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="sutannem" title="SütanneM" thumbnail={thumbSutAnnem}>
            An application developed natively for Android and iOS. Features include chat, map integration, and user matching. March 2021 – August 2021.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Released
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="smartpark" title="Smart Park" thumbnail={thumbSmartPark}>
            A parking software running on Android hand terminals.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="socialakce" title="Sosyal Akçe" thumbnail={thumbSocialAkce}>
            A shopping software developed for Android hand terminals with printer used in social markets.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="camerax-mlkit-pack" title="camerax-mlkit-pack" thumbnail={thumbPlaceholder}>
            Open-source library. Kotlin/Android.
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="deveng-networking" title="Deveng Networking Module (KMP)" thumbnail={thumbPlaceholder}>
            Open-source Kotlin Multiplatform networking abstraction library.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="deveng-core" title="Core UI Library (Compose)" thumbnail={thumbPlaceholder}>
            Reusable component system for standardized Jetpack Compose development.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
