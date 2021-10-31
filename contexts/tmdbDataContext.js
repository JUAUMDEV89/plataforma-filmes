import { createContext, useEffect, useState } from 'react';

export const TmdbContext = createContext();

export function TmdbProvider({ children }){ 
    const API_KEY='38c007f28d5b66f36b9c3cf8d8452a4b'

    const [genreId, setGenreId] = useState(28);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=${API_KEY}`).then((response)=>{
            response.json().then((data)=>{
               setMovies(data.results);
               console.log(movies);
            })
          })
    }, []);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=pt-BR&api_key=${API_KEY}`).then((response)=>{
            response.json().then((data)=>{
               setMovies(data.results);
               console.log(movies);
            })
          })
    }, [genreId]);


    return <TmdbContext.Provider value={ { movies, setGenreId } }>
        { children }
    </TmdbContext.Provider>
}