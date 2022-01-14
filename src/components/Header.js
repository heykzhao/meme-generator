import "../style/Header.css";
import trollFaceLogo from "../images/troll-face.png";

function Header() {
  return (
      <header className="header">
        <img 
          alt="Troll face logo"
          src={trollFaceLogo}
        />
        <h2>Meme Generator</h2>
      </header>
  )
}

export default Header;