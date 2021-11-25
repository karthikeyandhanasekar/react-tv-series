


const Content = ({ key,imgpath,title,count,average }) => {

    return (
        <div key={key} className="movie" >
            <img src={imgpath} alt={title} ></img>
            <h4>{title}</h4>
            <div className="likeview">
                <span class="like">❤ {average}</span>
                <span class="views">👁 {count}</span>
            </div>
        </div>

    )


}

export default Content