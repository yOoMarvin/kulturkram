import NextLink from 'next/link'
import styled from '@emotion/styled'
const { Heading, Flex, Text, Box, Image, Link } = require('@chakra-ui/core')

const CustomFlex = styled(Flex)`
  align-items: ${props => props.align === 'left' ? 'flex-start' : 'flex-end'}
`

const Teaser = (props) => {
  return (
    <CustomFlex flexDirection='column' align={props.align} justifyContent='flex-start' mb={8} maxWidth='700px'>
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
        <Link as='a' color='pink.600'>Mehr erfahren</Link>
      </NextLink>
    </CustomFlex>
  )
}

export default Teaser
