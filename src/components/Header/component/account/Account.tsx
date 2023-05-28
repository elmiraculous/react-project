import React, {useState} from "react"
import styles from "./Account.module.sass"
import {Icon} from "../../../Icon/Icon"
import {Modal} from "../../../Modal/Modal"

export const Account = () => {
	const [visible, setVisible] = useState(false)
	return (
		<div className={styles.block}>
			<div className={styles.place}>
				<div className={styles.pin}><Icon name='pin'/></div>
				<span className={styles.city}>Казань</span>
			</div>
			<div className={styles.money}>
				<div>
					<img src="/images/Frame 3.png" alt={"money"}/>
				</div>
				<span className={styles.balance}>1000</span>

			</div>
			<div className={styles.avatar}>
				<div><img src="/images/avatar.svg" alt={"avatar"}/></div>
				<Modal visible={visible} onClose={() => setVisible(false)}/>
				<button className={styles.text2} onClick={() => setVisible(true)}>Алексей</button>
			</div>
		</div>
	)
}
