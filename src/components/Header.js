import Input from "./inputfield"

const applntitle = "Tv-Relax"
document.title = applntitle

const Header = () => {

    const handletextfield = (event) => {
        console.log(event.target.value);
    }


    return (
        <header>
            <div>
                <h1>{applntitle}</h1>
            </div>
            <div>
                <Input type="search" placeholder="Game of thrones" onchange={handletextfield} />
            </div>
            
        </header>
    )
}

export default Header