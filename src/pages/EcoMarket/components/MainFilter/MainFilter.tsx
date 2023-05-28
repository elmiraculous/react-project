import React from "react"
import {CheckboxArray} from "./CheckboxArray"
import styles from "./MainFilter.module.sass"

const productTypeCheckboxes1 = [{name: "Мужской"}, {name: "Женский"}]
const productTypeCheckboxes2 = [{name: "Выбрать все"}, {name: "Одежда"}, {name: "Обувь"}, {name: "Аксессуары"}]
const productTypeCheckboxes3 = [{name: "Выбрать все"}, {name: "P&B"}, {name: "Adidas"}, {name: "Nike"}, {name: "Reebok"}]


export const MainFilter = () => {
	return (
		<div className={styles.block}>
			<CheckboxArray category='Пол' CheckboxArray={productTypeCheckboxes1}/>
			<CheckboxArray category='Тип товара' CheckboxArray={productTypeCheckboxes2}/>
			<CheckboxArray category='Брэнд' CheckboxArray={productTypeCheckboxes3}/>
		</div>
	)
}