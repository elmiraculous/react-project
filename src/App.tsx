import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {CollectionPoints} from "./components/CollectionPoints/CollectionPoints";
import {EcoMarket} from "./components/EcoMarket/EcoMarket";
import {About} from "./components/About/About";

function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/CollectionPoints' element={<CollectionPoints/>}></Route>
            <Route path='/EcoMarket' element={<EcoMarket/>}></Route>
            <Route path='/About' element={<About/>}></Route>
        </Routes>
        <Footer/>

    </div>

  );
}

export default App;
