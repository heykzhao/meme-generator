import "../style/Meme.css";

function Meme() {
  return (
    <main>
      <form className="form">
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
        >
          Get a new meme image 👹
        </button>
      </form>
    </main>
  )
}

export default Meme;