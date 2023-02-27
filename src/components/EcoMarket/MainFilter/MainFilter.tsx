import React from "react";
import {CheckBoxArray} from "./CheckBoxArray";
import styles from "./MainFilter.module.sass"


export function MainFilter(){
    return(
        <div className={styles.block}>
            <CheckBoxArray category={'Пол'} checkBoxArray={[{name:'Мужской'},{name:'Женский'}]}/>
            <CheckBoxArray category={'Тип товара'} checkBoxArray={[{name:'Выбрать все'},{name:'Одежда'},{name:'Обувь'},{name:'Аксессуары'}]}/>
            <CheckBoxArray category={'Брэнд'} checkBoxArray={[{name:'Выбрать все'},{name:'P&B'},{name:'Adidas'},{name:'Nike'},{name:'Reebok'}]}/>
        </div>
    )
}