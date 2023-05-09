import React from "react"
import styles from "./History.module.sass"
import priceImage from "../../../../images/Frame 3 (3).png"


interface material {
    type: string
    number: string
}

export interface HistoryProps {
    address: string
    material: material[]
    date: string
    price: number

}

export const History = (props: HistoryProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.main__box}>
				<div className={styles.main__box__text}>
					<div className={styles.main__box__text__type}>Адрес</div>
					<div className={styles.main__box__text__info}>{props.address}</div>
				</div>

				<div>
					<div className={styles.main__box__text__type}>Материал</div>
					<div className={styles.main__box__text__info}>{props.material.map((material, index) => (
						<div className={styles.main__box__text__info__point} key={index}>
							{material.type} {material.number}
						</div>))}
					</div>
				</div>

				<div>
					<div className={styles.main__box__text__type}>Дата</div>
					<div className={styles.main__box__text__info}>{props.date}</div>
				</div>
			</div>
			<div>
				<div className={styles.main__price}>
					<div>
						<img src={priceImage} alt={"price"}/>
					</div>
					<span className={styles.main__price__text}>{props.price}</span>
				</div>

			</div>

		</div>
	)
}