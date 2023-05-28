import React from "react"
import styles from "./Promocodes.module.sass"


export interface PromoСodProps {
    active: boolean
    date: string
    link: string
    price: string
}

export const PromoСod = (props: PromoСodProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.main__img}>
				{props.active ? (
					<div>
						<img className={styles.main__img__i} src="/images/Promocodes/img.png" alt={"images"}/>
					</div>
				) : <div>
					<img className={styles.main__img__i} src="/images/Promocodes/img_2.png" alt={"images"}/>
				</div>
				}
				<span className={styles.main__img__price}>{props.price}</span>
			</div>

			<div className={styles.main__info}>
				<div className={styles.main__info__date}>
					<span className={styles.main__info__date__text}>Дата создания:</span>
					<br/>
					<span className={styles.main__info__date__d}>{props.date}</span>
				</div>

				<div className={styles.main__info__link}>
					<span className={styles.main__info__date__text}>Ссылка на товар:</span>
					<br/>
					<span className={styles.main__info__link__l}>{props.link}</span>
				</div>
			</div>
			{props.active ? (
				<div>
					<button type="button" className={styles.main__button}>Показать qr-код</button>
				</div>
			) : null}

		</div>
	)
}