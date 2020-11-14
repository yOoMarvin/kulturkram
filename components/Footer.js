import { Box, Flex, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import styled from '@emotion/styled'

const ColoredFlex = styled(Flex)`
z-index: 1;
flex-direction: row;
@media (max-width: 768px) {
    flex-direction: column;
  }
&:before {
  content:"";
  background-color: #171923;
  position: absolute;
  height: 25%;
  width: 200vw;
  left: -100vw;
  z-index: -1;
}
`
const Footer = ({ children }) => {
  return (
    <>
      <ColoredFlex
        as='footer'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='900px'
        bg='gray.900'
        color='white'
        width='100%'
        mt={[0, 8]}
        p={8}

      >
        <Box mb={[8, 0]}>
          Kulturkram e.V. 2020
        </Box>
        <Box>
          <NextLink href='/' passHref>
            <Link as='a' p={[1, 4]}>
              Impressum
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='/' passHref>
            <Link as='a' p={[1, 4]}>
              Datenschutzerklärung
            </Link>
          </NextLink>
        </Box>
      </ColoredFlex>
    </>
  )
}

export default Footer
