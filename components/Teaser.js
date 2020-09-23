import NextLink from 'next/link'
const { Heading, Flex, Text, Box, Image, Link } = require('@chakra-ui/core')

const Teaser = (props) => {
  return (
    <Flex flexDirection='column' alignItems='flex-start' justifyContent='flex-start' mb={8} maxWidth='700px'>
      <Heading fontWeight='bold' fontSize='3xl'>
        {props.title}
      </Heading>
      <Text>
        ARTELIER | AUSTELLUNGEN | LESUNGEN
      </Text>
      <Box w='100%' mb={4} mt={4}>
        <Image src='https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1415&q=80' alt='art-gallery' />
      </Box>
      <NextLink href='/' passHref>
        <Link as='a' color='pink.600'>Mehr erfahren</Link>
      </NextLink>
    </Flex>
  )
}

export default Teaser
