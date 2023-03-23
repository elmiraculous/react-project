import React from "react";
// import styles from "./MainFilter.module.sass"
import styles from './Checkbox.module.sass'
import img from'../../images/Vector 1 (Stroke).png'
export interface Props{
    name: string
}

export const Checkbox = ({name}:Props)=> {
    return(
        <label className={styles.label}>
            <input type="checkbox" className={styles.label__checkBox}/>
            <div className={styles.label__checkBox__icon}>
                <img src={img}/>
            </div>
            <span className={styles.label__checkBox__text}>{name}</span>
        </label>
    )
}