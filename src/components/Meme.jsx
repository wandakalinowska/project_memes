import "../style/Meme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const Meme = ({ id, item, handleUpvotes, handleDownvotes }) => {
  let sum = -item.downvotes + item.upvotes;
  const alt = "Tu miał być obrazek";

  return (
    <div key={id} className="meme">
      <h2 className="meme-title">{item.title}</h2>
      <div className="meme-img">
        <img src={item.img} alt={alt} />
      </div>
      <div className="meme-container">
        <div className="meme-vote">
          <button
            className="btn meme-vote__btn-up"
            onClick={() => handleUpvotes(id)}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="meme-vote__icon-up icon"
            />
          </button>
          <p className="meme-vote__up">{item.upvotes}</p>
        </div>
        <div className="meme-vote">
          <p className="meme-vote__down">-{item.downvotes}</p>
          <button
            className="btn meme-vote__btn-down"
            onClick={() => handleDownvotes(id)}
          >
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="meme-vote__icon-down icon"
            />
          </button>
        </div>
      </div>
      <div className="meme-sum">
        <p>Suma głosów: {sum}</p>
      </div>
    </div>
  );
};

export default Meme;
