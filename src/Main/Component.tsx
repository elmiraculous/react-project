import React from "react"
import button from "../images/Button (1).png"
import styles from "./Component.module.sass"
import {NavLink} from "react-router-dom";
interface Component{
    text1: string
    text2: string
    img: string
    link: string
}



export const Component=(component: Component)=>{
    return(
        <div className={styles.component}>
            <div className={styles.component__row}>
                <div className={styles.component__row__text1}>{component.text1}</div>
                <div className={styles.component__row__text2}>{component.text2}</div>
                <NavLink to={component.link} className={styles.component__row__button}>
                    <img src={button}/>
                </NavLink>
            </div>
            <div className={styles.component__img}>
                <img className={styles.images} src={component.img}/>
            </div>

        </div>
    )
}