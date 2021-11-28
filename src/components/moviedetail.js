
import axios from "axios"
import { Fragment } from "react"
import { useParams } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import Aside from "./aside"
import Header from "./Header"

const apikey = `2debe0f00b477f3d87075013e384ea67`

const Movie = () => {
    const params = useParams()
    const [movie, getmovie] = useState([])
    const [tv, gettv] = useState([])



    const findmovie = async () => {
        try {
            const api = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apikey}`)
            getmovie(api.data)
        } catch (error) {
            console.log(error);
        }
    }
    const findtv = async () => {
        try {
            const api = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${apikey}`)
            gettv(api.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        findmovie()
        findtv()
    }, [])

    const details = movie === [] ? tv : movie
    console.log(movie === [] ? "tv" : "movie")
    document.title = details.title

    const imgurl = `https://image.tmdb.org/t/p/w500${details.poster_path}`
    console.log(details);
    return (
        <Fragment>
            <Header />
            <Aside />
            <section className="movie" >
                <img src={imgurl} alt={document.title} />
                <div>
                    <h1>{details.title} ({details.release_date})</h1>
                    <p>{details.overview}</p>
                    <p>{details.genres?.map(ele => ele.name).join(",")}</p>
                    

                </div>
            </section>


        </Fragment>
    )
}

export default Movie

/**
 * backdrop_path: "/tjwXKgaoiS1tovSBNAxFYEpIQtO.jpg"
created_by: [{…}]
episode_run_time: [22]
first_air_date: "2020-10-05"
genres: (3) [{…}, {…}, {…}]
homepage: ""
id: 111453
in_production: true
languages: (2) ['ar', 'hi']
last_air_date: "2021-11-27"
last_episode_to_air: {air_date: '2021-11-27', episode_number: 362, id: 3348611, name: 'Samrat Returns Home', overview: 'Sai and Virat enjoy drinking green tea on the terr…hem. Later, Samrat returns to the Chavan Mansion.', …}
name: "Ghum Hai Kisi Ke Pyaar Mein"
networks: (2) [{…}, {…}]
next_episode_to_air: {air_date: '2021-11-29', episode_number: 363, id: 3348615, name: 'Sai, Virat Defend Each Other', overview: 'After Patralekha starts bashing Sai and Virat for …or each other. Further, Sai confronts Patralekha.', …}
number_of_episodes: 364
number_of_seasons: 1
origin_country: ['IN']
original_language: "hi"
original_name: "घुम है किसिकी प्यार में"
overview: "Virat sacrifices his love to honour the promise he made to a dying man. Trapped between the past and the present, will he find love beyond the chains of duty?"
popularity: 930.424
poster_path: "/uNjnoT3RChs2r7O9pDyx7TNBvIj.jpg"
production_companies: [{…}]
production_countries: [{…}]
seasons: [{…}]
spoken_languages: (2) [{…}, {…}]
status: "Returning Series"
tagline: ""
type: "Scripted"
vote_average: 6
vote_count: 6
 */