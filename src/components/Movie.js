import React from "react";
import { useParams } from 'react-router-dom'

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

//Components
import MovieHeader from "./MovieHeader";
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actors from "./Actors";

//Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//Image
import NoImage from '../images/no_image.jpg';


const Movie = () => {
    const { movieId } = useParams()

    const { state: movieState, loading, error } = useMovieFetch(movieId)
    console.log(movieState)
    
    if (loading) return <Spinner />
    if (error) return <div>Something went wrong...</div>

    return (
        <>
            <MovieHeader movieTitle={movieState.original_title} />
            <MovieInfo movie={movieState} />
            <MovieInfoBar 
                time={movieState.runtime} 
                budget={movieState.budget} 
                revenue={movieState.revenue}
            />
            <Grid header='Actors'>
                {movieState.actors.map(actor => (
                    <Actors
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                            
                        } 
                    />
                ))}
            </Grid>
        </> 
    );
}

export default Movie;