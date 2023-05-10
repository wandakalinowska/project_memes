import './style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Hot from './components/Hot';
import Regular from './components/Regular';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
        </div>
        <div>
          <Routes>
            <Route
              path="/Hot"
              element={
                <Hot
                />
              }
            />
            <Route
              path="/Regular"
              element={
                <Regular
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
