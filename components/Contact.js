import { Flex, Heading, Link, Icon, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'

const ColoredFlex = styled(Flex)`
z-index: 1;
&:before {
  content:"";
  background-color: #ffdb1a;
  position: absolute;
  height: 30%;
  width: 200vw;
  left: -100vw;
  z-index: -1;
}
`

const Contact = () => {
  return (
    <ColoredFlex flexDirection='column' alignItems='center' justifyContent='space-around' width='100%' bg='primary.400'>
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
    </ColoredFlex>
  )
}

export default Contact
