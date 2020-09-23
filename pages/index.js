import { useColorMode, Heading, Flex, Stack, Text, Button } from '@chakra-ui/core'
import Container from '../components/Container'
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
          <Teaser title='WIR LIEBEN KUNST' />
          <Teaser title='WIR LIEBEN MUSIK' />
          <Teaser title='WIR LIEBEN DAS LEBEN' />
        </Flex>
      </Stack>
    </Container>
  )
}

export default Home
