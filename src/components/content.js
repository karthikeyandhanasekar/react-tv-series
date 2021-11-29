import { useNavigate } from "react-router"



const Content = ({ id, imgpath, title }) => {
    const naviagte = useNavigate()

    return (
        <div key={id} className="movie" onClick={() => naviagte(`../moviedetail/${title}/${id}`)} style={{ backgroundImage: `url(${imgpath})` }} >
        {/* <h4>{title}</h4>  */}
        </div>

    )


}

export default Content