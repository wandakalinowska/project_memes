import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import INITIAL_ARRAY from "./components/INITIAL_ARRAY";
import Nav from "./components/Nav";
import Regular from "./components/Regular";
import Hot from "./components/Hot";
import Home from "./components/Home";
import "./style/style.css";
import AddMemeSide from "./components/AddMemeSide";

export default function App() {
  const [state, setState] = useState(INITIAL_ARRAY);

  const handleUpvotes = (id) => {
    const newState = [...state];
    newState[id].upvotes += 1;
    setState(newState);
  };

  const handleDownvotes = (id) => {
    const newState = [...state];
    newState[id].downvotes += 1;
    setState(newState);
  };
  // state.filter((sum) => console.log(sum));

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
        </div>
        <div>
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                />
              }
            />
            <Route
              path="/Hot"
              element={
                <Hot
                  state={state}
                  setState={setState}
                  handleUpvotes={handleUpvotes}
                  handleDownvotes={handleDownvotes}
                />
              }
            />
            <Route
              path="/Regular"
              element={
                <Regular
                  state={state}
                  setState={setState}
                  handleUpvotes={handleUpvotes}
                  handleDownvotes={handleDownvotes}
                />
              }
            />
            <Route
              path="/Add_meme"
              element={
                <AddMemeSide
                  state={state}
                  setState={setState}
                  handleUpvotes={handleUpvotes}
                  handleDownvotes={handleDownvotes}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
