import { Flex, Heading, Link, Icon, Text } from '@chakra-ui/core'

const Contact = () => {
  return (
    <Flex flexDirection='column' alignItems='center' justifyContent='space-around' width='100vw' bg='primary.400' py={8}>
      <Heading>KONTAKT</Heading>
      <Link
        href='mailto:hello@kulturkram-mannheim.de'
        title='Email'
        isExternal
      >
        <Icon
          aria-label='Email'
          name='email'
          size='48px'
          color='black'
          variant='ghost'
          mb={4}
          mt={4}
        />
      </Link>
      <Link href='mailto:hello@kulturkram-mannheim.de' title='Email' isExternal>
        <Text as='a'>hello@kulturkram-mannheim.de</Text>
      </Link>
    </Flex>
  )
}

export default Contact
