import React from "react"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import axios from "axios"
import { useNavigate } from "react-router"


const apikey = `2debe0f00b477f3d87075013e384ea67`


const Input = ({ type, name, placeholder, onchange }) => {
    const [moviename, getmoviename] = useState('')
    const [movielist, getmovielist] = useState([])
    const naviagte = useNavigate()



    const handletextfield = (event) => {
        getmoviename(event.target.value);

    }
    const searchmovie = async () => {
        try {
            const api = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${moviename}`)
            getmovielist(api.data.results);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        searchmovie()
        document.querySelector(".suggestion").classList.toggle("hide");

    }, [moviename])


    return (
        <React.Fragment>
            <input type={type} name={name} placeholder={placeholder} onKeyUp={handletextfield} />
            <div className="suggestion" style={{ height: (movielist.length * document.querySelector(".suggestion div")?.offsetHeight) }} >
                {moviename !== '' ?
                    movielist.map(ele =>
                        {
                            if(ele.backdrop_path)
                        return <div key={ele.id} onClick={() => naviagte(`../moviedetail/${ele.name ? ele.name : ele.title}/${ele.id}`)} >
                            <img src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt={ele.name ? ele.name : ele.title} />
                            <h2>{ele.name ? ele.name : ele.title}</h2></div>

                        })
                    : document.querySelector(".suggestion")?.classList.toggle("hide")
                }
            </div>

        </React.Fragment>
    )
}

export default Input