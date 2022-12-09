import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="appContainer">
      <div className="app">
        <Header />
        <div className="contentContainer">
          <Outlet context={[showModal, setShowModal]} />
        </div>
        {showModal ? (
          <div className="modalContainer">
            <div className="modalContainer-div">Hello world</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
