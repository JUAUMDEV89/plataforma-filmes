import { ChakraProvider, extendTheme  } from '@chakra-ui/react';
import { TmdbProvider } from '../contexts/tmdbDataContext';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors });


function MyApp({ Component, pageProps }) {
  return <TmdbProvider>
    <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
  </TmdbProvider>
}

export default MyApp
