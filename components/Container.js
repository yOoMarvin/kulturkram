import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Button, Flex, Box, IconButton, Heading } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Footer from './Footer'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  }
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  }
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  }

  return (
    <>
      <StickyNav
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='1100px'
        width='100%'
        bg={navBgColor[colorMode]}
        as='nav'
        p={8}
        mt={[0, 8]}
        mb={8}
        mx='auto'
      >
        <Box>
          <NextLink href='/' passHref>
            <Heading as='a' size='lg' letterSpacing='tight'>KULTUR<br />KRAM E.V</Heading>
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
          <IconButton
            aria-label='Toggle dark mode'
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
          />
        </Box>
      </StickyNav>
      <Flex
        as='main'
        justifyContent='center'
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  )
}

export default Container
