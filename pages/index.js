import { Heading, Flex, Stack, Text, Button } from '@chakra-ui/core'
import Contact from '../components/Contact'
import Container from '../components/Container'
import Socials from '../components/Socials'
import TeamTeaser from '../components/TeamTeaser'
import Teaser from '../components/Teaser'

const Home = () => {
  return (
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
            mt={16}
          >
            <Heading color='black' fontWeight='bold' size='2xl'>WENN FISCHE FLIEGEN KÖNNTEN...</Heading>
            <Text color='black' fontSize='xl'>
              Warum eigentlich nicht? Wir bieten einen Raum Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean comm.
            </Text>
            <Button mt={8} mb={[8, 32]} variantColor='accent' variant='outline'>MEHR ÜBER DEN VEREIN ERFAHREN</Button>
          </Flex>
        </Flex>

        <Flex flexDirection='column' maxW='1000px' w='100%'>
          <Flex flexDirection='column' alignItems='flex-start'>
            <Teaser title='WIR LIEBEN KUNST' description='Artelier | Austellungen | Lesungen' src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80' alt='art-gallery' align='left' />
          </Flex>
          <Flex flexDirection='column' alignItems='flex-end'>
            <Teaser title='WIR LIEBEN MUSIK' description='Konzerte | Musikstudio | Produktion' src='https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='concert' align='right' />
          </Flex>
          <Flex flexDirection='column' alignItems='flex-start'>
            <Teaser title='WIR LIEBEN DAS LEBEN' description='Events | Austausch | Netzwerk' src='https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='group-of-people' align='left' />
          </Flex>
        </Flex>
        <TeamTeaser />
        <Socials />
        <Contact />
      </Stack>
    </Container>
  )
}

export default Home
