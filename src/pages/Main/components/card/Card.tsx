import React from "react"
import styles from "./Card.module.sass"
import {NavLink} from "react-router-dom"
import {Icon} from "../../../../components/Icon/Icon"

interface Card {
    title: string
    content: string
    img: string
    link: string
}


export const Card = (component: Card) => {
	return (
		<div className={styles.component}>
			<div className={styles.component__row}>
				<div className={styles.component__row__text1}>{component.title}</div>
				<div className={styles.component__row__text2}>{component.content}</div>
				<NavLink to={component.link} className={styles.component__row__button}>
					<Icon name={"arrow  "}/>
				</NavLink>
			</div>
			<div className={styles.component__img}>
				<img className={styles.images} src={component.img}/>
			</div>

		</div>
	)
}