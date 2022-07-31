import React from "react";
import mapmarker from "./assets/images/map-marker.svg";
import Tracks from "./features/tracks/Tracks";
import Users from "./features/user/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mapmarker} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Tracks />
        <Users />
      </section>
    </div>
  );
}

export default App;
