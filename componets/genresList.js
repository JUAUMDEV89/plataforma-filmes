import { Stack } from '@chakra-ui/react';

import { Genre } from './genre';

import { genresArray } from '../services/genresArray';

export function GenresList(){

    return <Stack
    spacing="8"
    direction="row"
  >
     {
       genresArray.map(genre=>(
         <Genre
           title={genre.title}
           active={false}
         />
       ))
     }
  </Stack>         
} 