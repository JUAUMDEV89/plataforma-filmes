import { useState, useEffect } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { AiFillCaretRight } from 'react-icons/ai';

export function Video(){

  const API_KEY='38c007f28d5b66f36b9c3cf8d8452a4b'

  const [genreId, setGenreId] = useState(35);
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=pt-BR&api_key=${API_KEY}`).then((response)=>{
      response.json().then((data)=>{
         setMovie(data.results[Math.floor(Math.random() * 20)]);
         console.log(data.results[Math.floor(Math.random() * 20)]);
      })
    });
  }, []);

    return <Flex
      alignItems="center"
      direction="column"
      w="100%"
      h="100%"   
    >
     <Flex
       w="300px"
       h="200px"
       cursor="pointer"
       position="relative"
       justifyContent="center"
       alignItems="center"
     >
       <Image
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt={movie.name}
        borderRadius="20px"
        position="absolute"
        w="100%"
        h="100%"
       />

       <AiFillCaretRight color="white" fontSize="5rem" style={{ zIndex: '3' }}  />
     </Flex>

     <Text
       color="white"
       w="300px"
       marginTop="10px"
     >{movie.overview}</Text>
    </Flex>
}