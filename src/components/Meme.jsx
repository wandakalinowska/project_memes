import "../style/Meme.css";

const Meme = ({ id, item, handleUpvotes, handleDownvotes }) => {
  let sum = -item.downvotes + item.upvotes;
  const alt = "Tu miał być obrazek";

  return (
    <div key={id} className="meme">
      <h2 className="meme-title">{item.title}:</h2>
      <div className="meme-img">
        <img src={item.img} alt={alt} />
      </div>
      <div className="meme-container">
        <div className="meme-vote">
          <p>{item.upvotes}</p>
          <button
            className="btn meme-vote__btn-up"
            onClick={() => handleUpvotes(id)}
          >
            +
          </button>
        </div>
        <div className="meme-vote">
          <p>-{item.downvotes}</p>
          <button
            className="btn meme-vote__btn-down"
            onClick={() => handleDownvotes(id)}
          >
            -
          </button>
        </div>
      </div>
      <div className="meme-vote__sum">Suma głosów: {sum}</div>
    </div>
  );
};

export default Meme;
