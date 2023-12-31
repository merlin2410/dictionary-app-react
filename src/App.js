import React from "react";
import {Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import WordDetails from "./components/WordDetails";
import History from "./components/History";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" Component={HomePage}/>
        {/* <Route path="/home" Component={HomePage}/> */}
        <Route path="/history" Component={History}/>
        <Route path="/word/:word" Component={WordDetails} />
      </Routes>
    </div>
  );
}

export default App;
