import React from "react";
import styles from "./Header.module.sass"
import logo from '../images/Frame 1982.png';
import {Account} from "./Account";

export  function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
                <a href='/' className={styles.text}>Главная</a>
                <a href='/CollectionPoints' className={styles.text}>Пункты сбора</a>
                <a href='/EcoMarket' className={styles.text}>ЭкоМаркет</a>
                <a href='/About' className={styles.text}>О сервисе</a>
            <Account/>
        </header>
    )

}