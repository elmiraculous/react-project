import React from "react";
import styles from "./MainFilter.module.sass"
export interface Props{
    name: string
}

export const CheckBox = ({name}:Props)=> {
    return(
        <label className={styles.label}>
            <input type="checkbox" className={styles.checkBox}/>
            <span>{name}</span>
        </label>
    )
}