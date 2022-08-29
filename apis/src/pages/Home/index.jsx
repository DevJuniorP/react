import './styles.css'
import spider from '../img/spiderman.jpg'
import { useState, useEffect } from 'react'
import APIKey from '../../config/key'

export function Home () {


    const [movies, setMovies] = useState([])

    useEffect(() => {
        //consumir API...

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return(
     <div className='container'>
        <h1>Movies</h1>
            <ul>
                    {movies.map(movie => {
                        return(
                            <>
                               <li key={movie.id}>
                                    <a href="https://google.com.br"><img src={movie.image_url} alt="movie.title" className='img-movie'/></a>
                                    <span>{movie.title}</span> 
                                </li>     
                            </>
                        )
                    })}
            </ul>
     </div>
    )
}