import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./EcoMarket/Main/Main";
import {CollectionPoints} from "./CollectionPoints/CollectionPoints";
import {EcoMarket} from "./EcoMarket/EcoMarket";
import {About} from "./About/About";
import {Layout} from "./Layout";

export const App=()=> {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path='/Main' element={<Main/>}></Route>
                <Route path='/CollectionPoints' element={<CollectionPoints/>}></Route>
                <Route path='/EcoMarket' element={<EcoMarket/>}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Route>
        </Routes>

    </div>

  );
}