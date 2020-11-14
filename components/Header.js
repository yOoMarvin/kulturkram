import React from 'react'
import NextLink from 'next/link'
import { Button, Flex, Box, Heading } from '@chakra-ui/core'
import styled from '@emotion/styled'

const FixedNav = styled(Flex)`
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Header = ({ children }) => {
  return (
    <>
      <FixedNav
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='900px'
        width='100%'
        bg='transparent'
        as='nav'
        p={4}
        mt={[0, 4]}
        mb={16}
        mx='auto'
      >
        <Box>
          <NextLink href='/' passHref>
            <Heading as='a' size='lg' letterSpacing='tight' color='accent.400'>KULTUR<br />KRAM E.V</Heading>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='/verein' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Verein
            </Button>
          </NextLink>
          <NextLink href='/events' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Events
            </Button>
          </NextLink>
          <NextLink href='/kontakt' passHref>
            <Button as='a' variant='ghost' p={[1, 4]}>
              Kontakt
            </Button>
          </NextLink>
        </Box>
      </FixedNav>
    </>
  )
}

export default Header
