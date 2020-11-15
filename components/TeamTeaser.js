import NextLink from 'next/link'
const { Heading, Flex, Text, Box, Image, Link } = require('@chakra-ui/core')

const TeamTeaser = (props) => {
  return (
    <Flex flexDirection='column' alignItems='center' mb={0}>
      <Box w='100vw' mb={4} mt={4}>
        <Image src='https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' alt='team' />
      </Box>
      <Flex flexDirection='column' w='100%' maxW='1000px'>
        <Heading fontWeight='bold' fontSize='3xl'>
          EIN BUNTES TEAM SAGT HALLO
        </Heading>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.
        </Text>
        <NextLink href='/' passHref>
          <Link as='a' color='pink.600'>Mehr erfahren</Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}

export default TeamTeaser
