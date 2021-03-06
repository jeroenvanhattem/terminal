import {
  useEffect,
  useState,
} from 'react'

import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';

import Home from '../components/Home/Home'
import Boot from '../components/Boot/Boot';
import { Flex } from '@chakra-ui/react';
import Theme from '../components/Theme';

const IndexPage = () => {
  const router = useRouter()
  const [booted, setBooted] = useState(false)
  return (
    <Flex
      bgColor={Theme()._900}
      w='100vw'
      minH='100vh'
    >
      <NextSeo
        title={'Home | Jeroen van Hattem'}
        description="Fullstack Javascript developer."
      />
      {booted
        ? <Home />
        : <Boot setBooted={setBooted}/>
      }
    </Flex>
  )
}

export default IndexPage