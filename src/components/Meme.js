import { useState } from "react";
import memesData from "../memesData";
import memeData from "../memesData";
import "../style/Meme.css";

function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form-input form-input-top"
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form-input form-input-bottom"
        />
        <button
          className="form-button"
          onClick={getMemeImage}
        >
          Get a new meme image 👹
        </button>
      </div>
      <div className="meme-image-section">
        <img 
          alt='Meme from Imgflip API'
          src={meme.randomImage}
        />
      </div>
    </main>
  )
}

export default Meme;