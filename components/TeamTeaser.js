import NextLink from 'next/link'
const { Heading, Flex, Text, Box, Link, Image } = require('@chakra-ui/core')

const TeamTeaser = (props) => {
  return (
    <Flex flexDirection='column' alignItems='center' mb={0}>
      <Box w='100vw' mb={4} mt={4}>
        <Image src='/team.jpg' alt='team' />
      </Box>
      <Flex flexDirection='column' w='100%' maxW='1000px' px={4}>
        <Heading fontWeight='bold' fontSize={['2xl', '4xl', '6xl']}>
          EIN BUNTES TEAM SAGT HALLO
        </Heading>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.
        </Text>
        <NextLink href='/' passHref>
          <Link as='a' color='accent.400' fontWeight='medium'>Mehr erfahren</Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}

export default TeamTeaser
