import Input from "./inputfield"



const applntitle = "MTV-Relax"

document.title = applntitle

const Header = () => {


    return (
        <header>
            <div>
                <h1>{applntitle}</h1>
            </div>
            <div>
                <Input type="search" placeholder="Game of thrones" />
            </div>

        </header>
    )
}

export default Header