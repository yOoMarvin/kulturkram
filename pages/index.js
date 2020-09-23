import { useColorMode, Heading, Flex, Stack, Text } from '@chakra-ui/core'
import Container from '../components/Container'

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
          <Heading size='2xl'>WENN FISCHE FLIEGEN KÖNNTEN...</Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Warum eigentlich nicht. Wir bieten einen Raum Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean comm.
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}

export default Home
