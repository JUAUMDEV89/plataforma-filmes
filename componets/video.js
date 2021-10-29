import { useState, useEffect } from 'react';
import { Flex, Image, Text, Input } from '@chakra-ui/react';
import { AiFillCaretRight } from 'react-icons/ai';

export function Video(){

  const API_KEY='38c007f28d5b66f36b9c3cf8d8452a4b'

  const [genreId, setGenreId] = useState(35);
  const [movie, setMovie] = useState([]);
  
   /*let description =  movie.overview;
  if(description.length > 200){
       description = description.substring(0, 200)+'...';
  }*/

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=${API_KEY}`).then((response)=>{
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
        style={{
          filter:{}
        }}
       />

       <AiFillCaretRight color="white" fontSize="5rem" style={{ zIndex: '3' }}  />
     </Flex>
    
    <Flex
      w="100%"
      
    >
      <Text
        color="white"
        marginTop="5px"
        fontWeight="bold"
      >{movie.name}</Text>
    </Flex>

     <Text
       color="white"
       w="300px"
       marginTop="10px"
     >{movie.overview}</Text>
    </Flex>
}