import { useColorMode, Heading, Flex, Stack, Text, Button } from '@chakra-ui/core'
import Container from '../components/Container'
import TeamTeaser from '../components/TeamTeaser'
import Teaser from '../components/Teaser'

const Home = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
        >
          <Heading fontWeight='bold' size='2xl'>WENN FISCHE FLIEGEN KÖNNTEN...</Heading>
          <Text color={secondaryTextColor[colorMode]} fontSize='xl'>
            Warum eigentlich nicht. Wir bieten einen Raum Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean comm.
          </Text>
          <Button mt={8} mb={8} variantColor='pink' variant='outline'>MEHR ÜBER DEN VEREIN ERFAHREN</Button>
        </Flex>
        <Flex flexDirection='column' justifyContent='flex-start' alignItems='flex-start' maxWidth='700px'>
          <Teaser title='WIR LIEBEN KUNST' description='Artelier | Austellungen | Lesungen' src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80' alt='art-gallery' />
          <Teaser title='WIR LIEBEN MUSIK' description='Konzerte | Musikstudio | Produktion' src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='concert' />
          <Teaser title='WIR LIEBEN DAS LEBEN' description='Events | Austausch | Netzwerk' src='https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='group-of-people' />
        </Flex>
        <TeamTeaser />
      </Stack>
    </Container>
  )
}

export default Home
