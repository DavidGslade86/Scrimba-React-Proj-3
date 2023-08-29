import troll from "../assets/troll-face.png"

function Header() {
    return(
        <div className="header--container">
            <div className="logo-container">
                <img className="troll-logo" src={troll} alt="troll face"/>
                <h2 className="site--title">Meme Generator</h2>
            </div>
            <h6 className="site--subtitle">React Course - Project 3</h6>
        </div>
    )
}

export default Header