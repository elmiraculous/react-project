import React from "react";
import styles from "./Header.module.sass"
import logo from '../../images/Frame 1982.png';
import {Account} from "./Account";
import {NavLink} from "react-router-dom";
import cn from 'classnames'

export  const Header=()=>{
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt={'logo'}/>
            </div>
            <nav>
                <NavLink to="/Main" className={({ isActive }) => cn(styles.text, isActive && styles.activeLink)}>Главная</NavLink>
                <NavLink to='/CollectionPoints' className={({ isActive }) => cn(styles.text, isActive && styles.activeLink)}>Пункты сбора</NavLink>
                <NavLink to="/EcoMarket" className={({ isActive }) => cn(styles.text, isActive && styles.activeLink)}>ЭкоМаркет</NavLink>
                <NavLink to="/About" className={({ isActive }) => cn(styles.text, isActive && styles.activeLink)}>О сервисе</NavLink>
            </nav>
            <Account/>
        </header>
    )

}