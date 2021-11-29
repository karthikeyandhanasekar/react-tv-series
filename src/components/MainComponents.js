import { Routes, Route, useLocation } from "react-router"
import Home from "./Home"
import Popular from "./popular"
import axios from "axios"
import { useState, useEffect } from "react"
import Upcomming from "./upcomming"
import TopRated from './toprated'
import Movie from "./moviedetail"


const apikey = `2debe0f00b477f3d87075013e384ea67`
const pagelimit = 200 / 20
document.title = "MTV-Relax"



const MainComponents = () => {
    //moviedata
    const [moviedata, getdata] = useState([])
    const [popularmovie, getpopularmovie] = useState([])
    const [upcommingmovie, getupcommingmovie] = useState([])
    const [topratedmovie, gettopratedmovie] = useState([])

    //tvseries data
    const [tvdata, gettv] = useState([])
    const [populartv, getpopulartv] = useState([])
    const [topratedtv, gettopratedtv] = useState([])



    //help to toggle b/w tv&movies
    const search = new URLSearchParams(useLocation().search)

    //movies
    const apimovieprocess = async () => {
        getdata([])
        try {
            for (let i = 1; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&sort_by=vote_count.desc&page=${i}`)
                getdata(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }

    }
    //popular movie
    const apipopularmovie = async () => {
        try {
            getpopularmovie([])
            for (let i = 1; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${i}`)
                getpopularmovie(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }
    }

    //upcomming movie
    const apiupcommingmovie = async () => {
        try {
            getupcommingmovie([])
            for (let i = 3; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&page=${i}`)
                getupcommingmovie(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }
    }

    //toprated movie
    const apitopratedmovie = async () => {
        try {
            gettopratedmovie([])
            for (let i = 3; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&page=${i}`)
                gettopratedmovie(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }
    }
    //toprated tv
    const apitopratedtv = async () => {
        try {
            gettopratedtv([])
            for (let i = 3; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apikey}&page=${i}`)
                gettopratedtv(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }
    }

    //tvseries
    const apitvprocess = async () => {
        gettv([])
        try {
            for (let i = 1; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&sort_by=vote_count.desc&page=${i}`)
                gettv(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }

    }
    //populartv
    const apipopulartv = async () => {
        try {
            getpopulartv([])
            for (let i = 1; i <= pagelimit; ++i) {
                const api = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=${i}`)
                getpopulartv(data => [...data, ...api.data.results]);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {


        apimovieprocess()
        apipopularmovie()
        apiupcommingmovie()
        apitvprocess()
        apipopulartv()
        apitopratedmovie()
        apitopratedtv()

    }, [])

    return (
        <Routes >
            <Route exact path="/" element={<Home data={search.get('type') === 'movie' ? moviedata : tvdata} />} />

            <Route  path="/react-tv-series" element={<Home data={search.get('type') === 'movie' ? moviedata : tvdata} />} />

            <Route path="/home" element={<Home data={search.get('type') === 'movie' ? moviedata : tvdata} />} />
            <Route path="/popular" element={<Popular data={search.get('type') === 'movie' ? popularmovie : populartv} />} />
            <Route path="/upcomming" element={<Upcomming data={upcommingmovie} />} />
            <Route path="/toprated" element={<TopRated data={search.get('type') === 'movie' ? topratedmovie : topratedtv} />} />
            <Route path="/moviedetail/:name/:id" element={<Movie />} />

        </Routes>

    )
}
export default MainComponents