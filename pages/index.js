import { ThemeProvider, CSSReset, Box, Heading } from '@chakra-ui/core'

const Home = () => (
  <ThemeProvider>
    <CSSReset />
    <Heading p={8} fontSize={['xs', 'xl', '4xl']}>Hi 👋 wir sind Kulturkram</Heading>
  </ThemeProvider>
)

export default Home
