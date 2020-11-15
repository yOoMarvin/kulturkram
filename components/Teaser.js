import NextLink from 'next/link'
const { Heading, Flex, Text, Box, Image, Link } = require('@chakra-ui/core')

const Teaser = (props) => {
  return (
    <Flex flexDirection='column' align={props.align} justifyContent='flex-start' mb={8} maxWidth='700px'>
      <Heading fontWeight='bold' fontSize='3xl'>
        {props.title}
      </Heading>
      <Text>
        {props.description}
      </Text>
      <Box w='100%' mb={4} mt={4}>
        <Image src={props.src} alt={props.alt} />
      </Box>
      <NextLink href='/' passHref>
        <Link as='a' color='accent.400'>Mehr erfahren</Link>
      </NextLink>
    </Flex>
  )
}

export default Teaser
