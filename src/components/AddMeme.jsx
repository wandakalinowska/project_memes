import React, { useState } from "react";
import "../style/AddMeme.css";
import AddMemeForm from "./AddMemeForm";

const AddMeme = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveMemesDataHandler = (enteredMemesData) => {
    const memesData = {
      ...enteredMemesData,
      id: Math.random().toString(),
    };
    props.onAddMeme(memesData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="form-container">
      {!isEditing && (
        <button className="form-container__btn" onClick={startEditingHandler}>
          Kliknij aby dodać mema
        </button>
      )}
      {isEditing && (
        <AddMemeForm
          onSaveMemesData={saveMemesDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default AddMeme;
