// React
import React, { useEffect, useState } from 'react'

// Chakra UI
import {
  ChakraProvider, ColorModeScript,
} from "@chakra-ui/react"

// SEO
import { DefaultSeo } from 'next-seo'

// Google Fonts
import '@fontsource/roboto-mono/300.css'
import '@fontsource/roboto-mono/600.css'
import '@fontsource/roboto-mono/700.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'

// Theme
import theme from "../theme/theme"

const App = ({ Component, pageProps }: any) => {

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://jeroenvanhattem.com',
          site_name: 'Jeroen van Hattem',
        }}
      />
      <React.StrictMode>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <Component {...pageProps} />
        </ChakraProvider>
      </React.StrictMode>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: { Component: any, ctx: any }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps: { ...pageProps } };
}
export default App
