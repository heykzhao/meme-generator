import { useEffect, useState } from "react";
import Draggable from 'react-draggable';
import "../style/Meme.css";

function Meme() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const array = await res.json();
      setAllMemes(array.data.memes);
    }
    getMeme();
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleTextChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
    <main>
      <div className="form">
        <textarea
          placeholder="Top text"
          className="form-input form-input-top"
          name="topText"
          value={meme.topText}
          onChange={handleTextChange}
        />
        <textarea 
          placeholder="Bottom text"
          className="form-input form-input-bottom"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleTextChange}
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
          className="noselect"
        />
        <Draggable
          defaultPosition={{x: 0, y: 0}}
        >
          <h2 className="meme-image-text top-text noselect">{meme.topText}</h2>
        </Draggable>
        <Draggable
          defaultPosition={{x: 0, y: 0}}
        >
          <h2 className="meme-image-text bottom-text noselect">{meme.bottomText}</h2>
        </Draggable> 
      </div>
    </main>
  )
}

export default Meme;