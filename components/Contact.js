import { Flex, Heading, Link, Image, Text } from '@chakra-ui/core'

const Contact = () => {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='space-around' width='100vw' bg='primary.400' py={8}>
      <Heading fontSize='7xl'>KONTAKT</Heading>
      <Link
        href='mailto:hello@kulturkram-mannheim.de'
        title='Email'
        isExternal
      >
        <Image
          aria-label='Mail'
          src='/mail.svg'
          size='48px'
          my={4}
        />
      </Link>
      <Link href='mailto:hello@kulturkram-mannheim.de' title='Email' isExternal>
        <Text fontFamily='mono' fontSize='2xl'>hello@kulturkram-mannheim.de</Text>
      </Link>
    </Flex>
  )
}

export default Contact
