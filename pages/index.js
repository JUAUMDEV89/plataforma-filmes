import { Flex } from '@chakra-ui/react';

import { GenresList } from '../componets/genresList';
import { Header } from '../componets/header';
import { Aside } from '../componets/aside';
import { CardsGrid } from '../componets/cardsGrid';
import { Video } from '../componets/video';
import { Footer } from '../componets/footer';

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      backgroundColor="blue.800"
    >
      <Aside />

       <Flex
        as="section"
        w="100%"
        h="100vh"
        flexDirection="column"
       >
         <Header />

        <Flex
          
        >
         <Flex
           direction="column"
           paddingLeft="30px"
         >
           <GenresList />

           <CardsGrid 
             genre_id={'99'}
           />
         </Flex>
        
          <Video />

         </Flex>
        
         <Footer />

       </Flex>

    </Flex>
  )
}
