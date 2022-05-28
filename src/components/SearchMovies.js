import React from 'react';
import MovieCard from './movieCard';
export default function SearchMovies(){

    const [query,setQuery] = React.useState('');
    const [movies,setMovies] = React.useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=24e81d603d8c2f52576d329228a77506&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <>
        <form className="form mt-4" onSubmit={searchMovies}>
            <label className="p-4 text-xl" htmlFor="query">Movie Name:</label>
            <input type="text" className="ml-4 p-4 rounded border" name="query" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="i.e. Jurassic Park"></input>
            <button type="submit" className="ml-4 w-fit-content p-4  rounded text-white bg-black hover:bg-blue-400">Search</button>
        </form>
        <div className="mt-8 px-12 card-list grid grid-cols-2 gap-4">
            {movies.filter(movie => movie.poster_path).map(movie => 
                <MovieCard imgSrc={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                key={movie.id} 
                title={movie.title}
                release_date={movie.release_date}
                average_rating={movie.vote_average}
                overview={movie.overview}
                />
                )}
        </div>
        </>
    ) 
}