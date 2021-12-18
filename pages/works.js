import { Container, Heading, SimpleGrid, Divider, 
  List,
  ListItem, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'



import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Smart Park" thumbnail={thumbInkdrop}>
          A parking software running on payment terminals with Android operating system 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Social Akçe"
            thumbnail={thumbWalknote}
          >
            A shopping software developed for terminals with android operating system and printer used in social markets.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="SütanneM"
            thumbnail={thumbFourPainters}
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
            id="modetokyo"
            thumbnail={thumbModeTokyo}
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
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Web to App">
          Native android app template that I developed for those who want to migrate their websites to android application. 
          Technologies used in the project are Java and mongoDB
          </WorkGridItem>

        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
