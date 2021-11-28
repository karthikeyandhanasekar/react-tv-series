import React from "react"
import { Link } from "react-router-dom"


const Aside = () => {

    return (
        <React.Fragment>
            <aside >
                <ul>
                    <h4>Movies</h4>
                    <li><Link to="/home?type=movie" className="link" >Home</Link></li>
                    <li><Link to="/popular?type=movie" className="link" >Popular</Link></li>
                    <li><Link to="/upcomming?type=movie" className="link" >Upcomming</Link></li>
                    <li><Link to="/toprated?type=movie" className="link" >Top Rated</Link></li>
                </ul>
                <ul>
                    <h4>TV</h4>
                    <li><Link to="/home?type=tv" className="link" >Home</Link></li>
                    <li><Link to="/popular?type=tv" className="link" >Popular</Link></li>
                    <li><Link to="/toprated?type=tv" className="link" >Top Rated</Link></li>
                </ul>
            </aside>
        </React.Fragment>
    )



}
export default Aside