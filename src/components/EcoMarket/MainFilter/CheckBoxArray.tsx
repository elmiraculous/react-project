import React from "react";
import styles from "./MainFilter.module.sass"
import {CheckBox, Props} from "./CheckBox";

export interface CheckBoxArray {
    category: string
    checkBoxArray: Array<Props>
}

export const CheckBoxArray =  ({ category, checkBoxArray }: CheckBoxArray) => {
    return (
        <div>
            <div>
            <span className={styles.text}>{category}</span>
            <br/>
                <div className={styles.choose}>
                    {checkBoxArray.map((checkbox: Props) => {
                        return <CheckBox name={checkbox.name}/>
                    })
                    }
                </div>
            </div>
        </div>
    )
}
