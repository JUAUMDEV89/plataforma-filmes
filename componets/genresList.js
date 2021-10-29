import { Stack } from '@chakra-ui/react';

import { Genre } from './genre';

export function GenresList(){

    return <Stack
    spacing="8"
    direction="row"
  >
     
       
         <Genre
           title="Ação"
           active={true}
         />

         <Genre
           title="Comédia"
           active={false}
         />

         <Genre
           title="Terror"
           active={false}
         />

         <Genre
           title="Romance"
           active={false}
         />

         <Genre
           title="Documentarios"
           active={false}
         />
    
  </Stack>         
} 