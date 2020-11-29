import { Heading, Flex, Stack, Text, Button, Box, Image } from '@chakra-ui/core'
import styled from '@emotion/styled'
import Contact from '../components/Contact'
import Container from '../components/Container'
import Socials from '../components/Socials'
import TeamTeaser from '../components/TeamTeaser'
import Teaser from '../components/Teaser'

import { client } from '../lib/prismic-configuration'
import Prismic from 'prismic-javascript'

const Hero = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 0;

`

export default function Home ({ home, teasers }) {
  return (
    <>
      <Hero>
        <Image src='/hero.svg' />
      </Hero>
      <Container>

        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='center'
          w='100%'
        >
          <Flex flexDirection='column' width='100%' maxW='1000px'>
            <Flex
              flexDirection='column'
              alignItems='flex-start'
              maxW='700px'
              mt={[4, 16]}
            >
              <Heading color='black' fontWeight='900' fontSize={['4xl', '5xl', '7xl']} zIndex='1'>{home.data.hero}</Heading>
              <Text color='black' fontSize='xl'>
                {home.data.hero_description}
              </Text>
              <Button style={{ borderRadius: '0', border: '2px solid' }} mt={8} mb={[8, 32]} variantColor='accent' variant='outline' fontWeight='medium'>{home.data.button_text}</Button>
            </Flex>
          </Flex>

          <Flex flexDirection='column' maxW='1000px' w='100%'>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Teaser title={teasers.results[0].data.title} description={teasers.results[0].data.description} src={teasers.results[0].data.image_url.url} alt='art-gallery' align='left' />
            </Flex>
            <Flex flexDirection='column' alignItems='flex-end'>
              <Teaser title={teasers.results[1].data.title} description={teasers.results[1].data.description} src={teasers.results[1].data.image_url.url} alt='concert' align='right' />
            </Flex>
            <Flex flexDirection='column' alignItems='flex-start'>
              <Teaser title={teasers.results[2].data.title} description={teasers.results[2].data.description} src={teasers.results[2].data.image_url.url} alt='group-of-people' align='left' />
            </Flex>
          </Flex>
          <TeamTeaser />
          <Socials />
          <Contact />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps (context) {
  const home = await client.getSingle('homepage')
  const teasers = await client.query(
    Prismic.Predicates.at('document.type', 'teaser'),
    { orderings: '[my.teaser.id]' }
  )
  return {
    props: {
      home,
      teasers
    }
  }
}
