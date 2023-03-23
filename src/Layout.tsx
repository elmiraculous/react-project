import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Outlet} from "react-router-dom";
import styles from "./App.module.sass"

export const Layout=()=> {
    return (
        <div className={styles.layout}>
            <Header/>
            <main> <Outlet/> </main>
            <Footer/>

        </div>

    );
}