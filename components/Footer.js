import { Box, Flex, Link } from '@chakra-ui/core'
import NextLink from 'next/link'

const Footer = ({ children }) => {
  return (
    <>
      <Flex
        flexDirection='row'
        as='footer'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='900px'
        width='100%'
        mx='auto'
        mt={[0, 8]}
        p={8}

      >
        <Box>
          Kulturkram e.V. 2020
        </Box>
        <Box>
          <NextLink href='/' passHref>
            <Link as='a' p={[1, 4]}>
              Impressum
            </Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link as='a' p={[1, 4]}>
              Datenschutzerklärung
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </>
  )
}

export default Footer
