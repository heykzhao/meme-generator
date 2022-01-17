import "./style/Reset.css";
import "./style/App.css"
import Header from "./components/Header";
import Meme from "./components/Meme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="non-footer-content">
        <Header />
        <Meme />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
