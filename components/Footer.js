import { Box, Link, Stack } from '@chakra-ui/core'
import NextLink from 'next/link'

const Footer = ({ children }) => {
  return (
    <>
      <Stack
        as='footer'
        alignItems='center'
        justifyContent='center'
        bg='gray.900'
        color='white'
        py={8}
        spacing={4}
        flexWrap='wrap'

      >
        <Box>
          Kulturkram e.V. 2020
        </Box>
        <Box>
          <NextLink href='/' passHref>
            <Link as='a'>
              Impressum
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='/' passHref>
            <Link as='a'>
              Datenschutzerklärung
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </>
  )
}

export default Footer
