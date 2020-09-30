import { Flex, Link, Icon } from '@chakra-ui/core'

const Socials = () => {
  return (
    <Flex flexDirection='row' alignItems='center' justify='space-around' width='100%' pt={16} pb={16}>
      <Link
        href='https://www.facebook.com'
        title='Facebook'
        isExternal
      >
        <Icon
          aria-label='Facebook'
          name='facebook'
          size='48px'
          color='black'
          variant='ghost'
        />
      </Link>
      <Link
        href='https://www.instagram.com'
        title='Instagram'
        isExternal
      >
        <Icon
          aria-label='Instagram'
          name='instagram'
          size='48px'
          color='black'
          variant='ghost'
        />
      </Link>
      <Link
        href='https://www.youtube.com/'
        title='YouTube'
        isExternal
      >
        <Icon
          aria-label='YouTube'
          name='youtube'
          size='48px'
          color='black'
          variant='ghost'
        />
      </Link>
    </Flex>
  )
}

export default Socials
