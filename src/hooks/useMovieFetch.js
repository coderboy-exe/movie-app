import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (movieId) => {

    const [state, setstate] = useState({});
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setloading(true);
                seterror(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //GET DIRECTORS
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setstate({
                    ...movie,
                    actors: credits.cast,
                    directors,
                })

                setloading (false);


            } catch (error) {
                seterror(true);
            }
        };

        fetchMovieData();

    }, [movieId]);

    return { state, loading, error };
    
}