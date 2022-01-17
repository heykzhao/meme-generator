import "../style/Header.css";
import trollFaceLogo from "../images/troll-face.png";

function Header() {
  return (
      <header className="header">
        <div className="header-logo">
          <img 
            alt="Troll face logo"
            src={trollFaceLogo}
          />
          <h2>Meme Generator</h2>
        </div>
        <h4>Randomly generated memes, draggable text.</h4>
      </header>
  )
}

export default Header;