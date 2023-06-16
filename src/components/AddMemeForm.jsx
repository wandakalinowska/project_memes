import React from "react";
import { useState } from "react";
import "../style/AddMemeForm.css";

const AddMemeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImg, setEnteredImg] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setEnteredImg(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const memesData = {
      title: enteredTitle ? enteredTitle : "Mem",
      img: enteredImg,
      upvotes: 0,
      downvotes: 0,
    };

    props.onSaveMemesData(memesData);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className="add-header">Dodaj mema</h2>
      <div className="add-container">
        <div className="add-container__title">
          <label>Tytuł mema:</label>
          <input
            type="text"
            placeholder="Mem"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="add-container__img">
          <label>Adres url: </label>
          <input
            type="url"
            placeholder="https://"
            value={enteredImg}
            onChange={imgChangeHandler}
            required
          />
        </div>
        <div></div>
      </div>
      <div className="add-container__button">
        <button
          className="add-container__button--btn"
          type="button"
          onClick={props.onCancel}
        >
          Zrezygnuj
        </button>
        <button className="add-container__button--btn" type="submit">
          Dodaj
        </button>
      </div>
    </form>
  );
};

export default AddMemeForm;
