import "../style/Meme.css";

function Meme() {

  function getMemeImage() {
    console.log("Test");
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
    </main>
  )
}

export default Meme;