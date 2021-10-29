import { useState, useEffect } from 'react';
import { Flex, Wrap } from '@chakra-ui/react';

import { TmdbContext } from '../contexts/tmdbDataContext';

import { Card } from './card';

export function CardsGrid(){
  
  const API_KEY='38c007f28d5b66f36b9c3cf8d8452a4b'

  const [genreId, setGenreId] = useState(35);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=pt-BR&api_key=${API_KEY}`).then((response)=>{
      response.json().then((data)=>{
         setMovies(data.results);
         console.log(movies);
      })
    })
  }, []);
  
    return <Wrap
      spacing="60px"
      h="400px"
      w="100%"
      maxWidth="890px"
      marginTop="20px"
      overflow="hidden"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar':{
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#FE6737',
          borderRadius: '24px',
        },
      }}
    >
       {
         movies.map(movie=>(
           <Card
              key={movie.id}
              name={movie.name}
              description={movie.name}
              url_image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
           />
         ))      
       }   
    </Wrap>
}