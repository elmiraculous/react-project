import React from "react";
import styles from "./Footer.module.sass";
import mail from '../images/Mail (1).png'
import call from '../images/Call.png'
export function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.gmail}>
                <img src={mail} alt="mail"/>
                <span className={styles.text}>info@ecorus.ru</span>
            </div>
            <div className={styles.phone}>
                <img src={call} alt="call"/>
                <span className={styles.text}>+7 (800) 880-88-88</span>
            </div>
        </footer>
    )

}