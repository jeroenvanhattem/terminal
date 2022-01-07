import { Flex, Heading, Text } from "@chakra-ui/layout"
import File from "../../Interface/File"
import LinkButton from "../../Shared/LinkButton"

const Music = (props: any) => {
  const { setActive } = props
  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
    >
      <File setActive={setActive} name='music.tsx'>
        <Flex
          flexDir='column'
          align='center'
          minH='100%'
        >
          <Heading>Music</Heading>
          <Flex
            w='80%'
            h='100%'
            p={4}
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <Flex
              w={{ base: '90%', lg: '50%' }}
              h={{ base: 'unset', lg: '100%' }}
              flexDir='column'
              mx={2}
            >
              <Text my={1}>
                When I was little, my grandma had a keyboard. Every time we went to visit her, I&#39;d spent the entire time messing around on her keyboard.
                After a while, she bought a new one and I could have her old keyboard. Accompanied with some books, I started learning playing piano.
                Admittedly, I was never very good at it.
              </Text>
              <Text my={1}>
                It did make me fall in love with music. The whole culture around it. Around that time, I also found hiphop. Various artists got me wanting to rap.
                I found some beats online and just started rapping. After a while, I bought a cheap microphone online and started recording some songs. They were horrible.
                But I wouldn&#39;t be me if I didn&#39;t keep trying.
              </Text>
              <Text my={1}>
                After years of practicing, I finally released a song called &#39;Intro&#39;. There was a lot of progress, but I still got really far to go.
                I hope to release a bit more this year. Let&#39;s see what this year has in store for us.
              </Text>
              <LinkButton url='https://open.spotify.com/artist/7Egoy0UuRKksBWzmGYzd68?si=kNp4qdDtSya1nmkr-vy92Q'>YENO on Spotify</LinkButton>
            </Flex>
            <Flex
              w={{ base: '90%', lg: '50%' }}
              h={{ base: 'auto', lg: '100%' }}
              mx={{ base: 'unset', lg: 2 }}
              my={{ base: 4, lg: 'unset' }}
            >
              <iframe src="https://open.spotify.com/embed/artist/7Egoy0UuRKksBWzmGYzd68?utm_source=generator" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Flex>
          </Flex>
        </Flex>
      </File >
    </Flex >
  )
}

export default Music