import Meme from "./Meme";

const Hot = ({ state, setState, handleUpvotes, handleDownvotes }) => {
  return (
    <div>
      {state.map(
       (item, id) =>
          -item.downvotes + item.upvotes > 5 && (
            <>
              <Meme
                id={id}
                item={item}
                handleUpvotes={handleUpvotes}
                handleDownvotes={handleDownvotes}
              />
            </>
          )
      )}
    </div>
  );
};

export default Hot;
