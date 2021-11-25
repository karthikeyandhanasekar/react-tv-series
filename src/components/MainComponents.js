import { Routes, Route, Navigate } from "react-router"
import Home from "./Home"
import Popular from "./popular"
import axios from "axios"
import { useState, useEffect } from "react"


const apikey = `2debe0f00b477f3d87075013e384ea67`
const pagelimit = 500



const MainComponents = () => {
    const [homedata, getdata] = useState([])
    const [popular, getpopular] = useState([])

    useEffect(() => {
        const apiprocess = async () => {
            getdata([])
            try {
                for (let i = pagelimit; i !== 450; --i) {
                    const api = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&sort_by=vote_average.desc&page=${i}`)
                    getdata(data => [...data, ...api.data.results]);
                }

            } catch (error) {
                console.log(error);
            }

        }
        const apipopular = async () => {
            try {
                getpopular([])
                for (let i = pagelimit; i !== 450; --i) {
                    const api = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=${i}`)
                    getpopular(data => [...data, ...api.data.results]);
                }

            } catch (error) {
                console.log(error);
            }
        }
        apiprocess()
        apipopular()
    }, [])
    console.log(popular);
    return (

        <Routes>
            <Route exact path="/" element={<Home data={homedata} />} />
            <Route path="/popular" element={<Popular data={popular} />} >


            </Route>

        </Routes>

    )
}
export default MainComponents