import React from 'react'
import { useColorMode, Flex } from '@chakra-ui/core'

import Footer from './Footer'
import Header from './Header'

const Container = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  }
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  }

  return (
    <>
      <Header />
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
