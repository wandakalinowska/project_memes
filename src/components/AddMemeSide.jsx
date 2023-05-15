import Meme from "./Meme";
import AddMeme from "./AddMeme";

const AddMemeSide = ({ state, setState, handleUpvotes, handleDownvotes }) => {
  const addMemeHandler = (meme) => {
    setState((prevMeme) => {
      return [meme, ...prevMeme];
    });
  };

  return (
    <div>
      <div>
        <AddMeme onAddMeme={addMemeHandler} />
      </div>
      {state.map((item, id) => (
        <>
          <Meme
            key={id}
            id={id}
            item={item}
            handleUpvotes={handleUpvotes}
            handleDownvotes={handleDownvotes}
          />
        </>
      ))}
    </div>
  );
};

export default AddMemeSide;
