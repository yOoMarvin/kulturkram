import { Stack, Link, Image } from '@chakra-ui/core'

const Socials = () => {
  return (
    <Stack isInline alignItems='center' justifyContent='center' spacing={16} width='100%' pt={16} pb={16} mb={8}>
      <Link
        href='https://www.facebook.com'
        title='Facebook'
        isExternal
      >
        <Image
          aria-label='Facebook'
          src='/facebook.svg'
          size='48px'
        />
      </Link>
      <Link
        href='https://www.instagram.com'
        title='Instagram'
        isExternal
      >
        <Image
          aria-label='Instagram'
          src='/instagram.svg'
          size='48px'
        />
      </Link>
      <Link
        href='https://www.youtube.com/'
        title='YouTube'
        isExternal
      >
        <Image
          aria-label='Youtube'
          src='/youtube.svg'
          size='48px'
        />
      </Link>
    </Stack>
  )
}

export default Socials
