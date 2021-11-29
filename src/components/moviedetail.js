
import axios from "axios"
import { Fragment } from "react"
import { useParams } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import Similar from "./similar"
import Aside from "./aside"
import Collection from "./collections"
import Header from "./Header"

const apikey = `2debe0f00b477f3d87075013e384ea67`

const Movie = () => {
    const params = useParams()
    const name = params.name
    const [movie, getmovie] = useState()
    const [tv, gettv] = useState()



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
    }, [params.id])


    const details = movie?.title === name ? movie : tv
    const type = movie?.title === name ? "movie" : "tv"


    document.title = details?.title ? details?.title : details?.name

    const imgurl = `https://image.tmdb.org/t/p/w500${details?.poster_path}`
    const runtime = details?.runtime ? details?.runtime : details?.episode_run_time
    const releasedata = details?.release_date ? details?.release_date : details?.first_air_date
    const homepage = details?.homepage
    const iscollection = details?.belongs_to_collection ? details?.belongs_to_collection?.id : null
    const seasons = details?.seasons ? details?.seasons?.length : null
    const status = details?.status

    console.log(iscollection);
    return (
        <Fragment>
            <Header />
            <Aside />
            <section className="movie" >
                <div className="detail">
                    <img onClick={() => homepage ? window.open(homepage) : null} src={imgurl} alt={document.title} />
                    <div>
                        <h1 onClick={() => homepage ? window.open(homepage) : null}>{document.title} | {releasedata} | {runtime ? runtime + " min" : "Unannounced"} | {status}</h1>
                        <p>{details?.overview}</p>
                        <p>{details?.genres?.map(ele => ele.name).join(",")}</p>
                        <p>{seasons ? `No of Seasons : ${seasons}` : null}</p>
                    </div>

                </div>

                {iscollection ? <div className="collection"> <Collection collectionid={iscollection} />    </div>
                    : null}
                    
                    {<Similar type={type} id={params.id} />}

            </section>
        </Fragment>
    )

}


export default Movie