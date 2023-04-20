import React from "react"
import styles from "./MainFilter.module.sass"
import {Checkbox, Props as CheckboxProps} from "./Checkbox"

interface CheckboxArray {
    category: string
    CheckboxArray: Array<CheckboxProps>
}

export const CheckboxArray =  ({ category, CheckboxArray }: CheckboxArray) => {
	return (
		<div className={styles.box}>
			<p className={styles.text}>{category}</p>
			<div className={styles.choose}>
				{CheckboxArray.map((checkbox: CheckboxProps) =>
					<Checkbox name={checkbox.name}/>)
				}
			</div>
		</div>
	)
}
