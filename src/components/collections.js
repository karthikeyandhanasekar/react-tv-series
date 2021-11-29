import { useEffect, useState } from "react/cjs/react.development"
import axios from "axios"
import Content from "./content"
import React from "react"

const apikey = `2debe0f00b477f3d87075013e384ea67`

const Collection = ({ collectionid }) => {
    const [collection, getcollection] = useState()

    const collections = async () => {
        try {
            const api = await axios.get(`https://api.themoviedb.org/3/collection/${collectionid}?api_key=${apikey}`)
            getcollection(api.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        collections()
    }, [])

    const ui = collection?.parts?.map(ele => <Content id={ele.id} imgpath={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} title={ele.title ? ele.title : ele.name}
        count={ele.vote_count} average={ele.vote_average} />
    )
    return (
        <React.Fragment>
             {ui}
        </React.Fragment>
    )
}

export default Collection