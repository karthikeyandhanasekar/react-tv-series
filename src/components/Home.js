import { Fragment } from "react"
import Aside from "./aside"
import Content from "./content"
import Header from "./Header"

const Home = ({ data }) => {
    document.title="Home"
    const ui = data.map(ele => {
        if (ele.backdrop_path)
            return <Content key={ele.id} imgpath={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} title={ele.name}
                count={ele.vote_count} average={ele.vote_average}
            />
    }
    )
    
    return (
        <Fragment>
            <Header />
            <Aside />
            <section>
                {ui}
            </section>


        </Fragment>
    )

}

export default Home