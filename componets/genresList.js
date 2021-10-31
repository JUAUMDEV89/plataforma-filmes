import { useContext, useState } from 'react';
import { Stack } from '@chakra-ui/react';

import { TmdbContext } from '../contexts/tmdbDataContext';

import { Genre } from './genre';

export function GenresList(){

    const [activeAction, setActiveAction] = useState(false);
    const [activeComedy, setActiveComedy] = useState(false);
    const [activeHorror, setActiveHorror] = useState(false);
    const [activeRomance, setActiveRomance] = useState(false);
    const [activeDoc, setActiveDoc] = useState(false);

    const { setGenreId } = useContext(TmdbContext);

    function handleLoadAction(){
       setGenreId(28);
       setActiveAction(true);

       setActiveComedy(false);
       setActiveHorror(false);
       setActiveRomance(false);
       setActiveDoc(false);
    }

    
    function handleLoadComedy(){
      setGenreId(35)
      setActiveComedy(true);

       setActiveAction(false);
       setActiveHorror(false);
       setActiveRomance(false);
       setActiveDoc(false);
    }

    
    function handleLoadHorror(){
      setGenreId(27)
      setActiveHorror(true);

       setActiveAction(false);
       setActiveComedy(false);
       setActiveRomance(false);
       setActiveDoc(false);
    }

    
    function handleLoadRomance(){
      setGenreId(10749)
      setActiveRomance(true);

       setActiveAction(false);
       setActiveComedy(false);
       setActiveHorror(false);
       setActiveDoc(false);
    }

    function handleLoadDocumentary(){
      setGenreId(99)
      setActiveDoc(true);

       setActiveAction(false);
       setActiveComedy(false);
       setActiveRomance(false);
       setActiveHorror(false);
    }

    return <Stack
    spacing="8"
    direction="row"
  >
     
       
         <Genre
           title="Ação"
           active={activeAction}
           onClick={handleLoadAction}
         />

         <Genre
           title="Comédia"
           active={activeComedy}
           onClick={handleLoadComedy}
         />

         <Genre
           title="Terror"
           active={activeHorror}
           onClick={handleLoadHorror}
         />

         <Genre
           title="Romance"
           active={activeRomance}
           onClick={handleLoadRomance}
         />

         <Genre
           title="Documentarios"
           active={activeDoc}
           onClick={handleLoadDocumentary}
         />
    
  </Stack>         
} 