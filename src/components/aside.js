import React from "react"
import { Link } from "react-router-dom"


const Aside = () => {

    return (
        <React.Fragment>
            <aside >
                <ul>
                    <li><Link to="/" className="link" >Home</Link></li>
                    <li><Link to="/popular" className="link" >Popular</Link></li>
                    <li><Link to="/" className="link" >Upcomming</Link></li>
                    <li><Link to="/" className="link" >Top Rated</Link></li>
                </ul>
           </aside>
        </React.Fragment>
    )



}
export default Aside