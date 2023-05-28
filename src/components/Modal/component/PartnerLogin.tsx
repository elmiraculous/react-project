import React from "react"
import styles from "../Modal.module.sass"
import {Field, Form, Formik} from "formik"

interface PartnerLoginProps {
    onTabChange: (tabName: string) => void;
}

export const PartnerLogin: React.FC<PartnerLoginProps> = ({onTabChange}) => {

	return (
		<div>
			<Formik
				initialValues={{
					organization: "",
					email: "",
					password: ""
				}}
				onSubmit={() => {
					//ghjyrte
				}}

			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (

					<Form className={styles.form}>

						<Field
							className={styles.input}
							type="text"
							name="Наименование организации"
							onChange={handleChange}
							onBlur={handleBlur}
							//value={values.phone}
						/>

						<Field
							className={styles.input}
							type="text"
							name="Email"
							onChange={handleChange}
							onBlur={handleBlur}
							//value={values.phone}

						/>

						<Field
							className={styles.input}
							type="password"
							name="Пароль"
							onChange={handleChange}
							onBlur={handleBlur}
							//value={values.password}
						/>

						<button className={styles.but_entrance} onClick={() => onTabChange("code")}>Получить код
						</button>
						<div className={styles.but_green}>
							<button onClick={() => onTabChange("register")}>Я уже зарегистировался(-ась)</button>
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
