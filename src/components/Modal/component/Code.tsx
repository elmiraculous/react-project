import React from "react"
import styles from "../Modal.module.sass"
import {Field, Form, Formik} from "formik"

interface CodeProps {
    onTabChange: (tabName: string) => void;
}

export const Code: React.FC<CodeProps> = ({onTabChange}) => {

	return (
		<div>
			<Formik
				initialValues={{
					code: "",
				}}
				onSubmit={() => {
					//hjgfhjvchgj
				}}

			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Form className={styles.form}>
						<div className={styles.text2}>Введите код отправленный вам на телефон</div>

						<Field
							className={styles.input}
							type="text"
							name="Код"
							onChange={handleChange}
							onBlur={handleBlur}
							//value={values.phone}

						/>
						<button className={styles.but_entrance}>Отправить</button>
						<div className={styles.but_green}>
							<button type="button">Не получил(-а) код</button>
						</div>
						<button className={styles.but_partner} onClick={() => onTabChange("partner-login")}>Вход для
                            партнёров
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}