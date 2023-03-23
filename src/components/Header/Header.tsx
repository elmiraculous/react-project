import React from "react";
import styles from "./Header.module.sass"
import logo from '../../images/Frame 1982.png';
import {Account} from "./Account";
import {NavLink} from "react-router-dom";

export  const Header=()=>{
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
            <nav>
                <NavLink to="/" className={styles.text}>Главная</NavLink>
                <NavLink to='/CollectionPoints' className={styles.text}>Пункты сборая</NavLink>
                <NavLink to="/EcoMarket" className={styles.text}>ЭкоМаркет</NavLink>
                <NavLink to="/About" className={styles.text}>О сервисе</NavLink>
            </nav>
            <Account/>
        </header>
    )

}