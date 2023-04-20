import React from "react"
import styles from "./Modal.module.sass"
import {Field, Form, Formik} from "formik"

interface RegisterProps {
    onTabChange: (tabName: string) => void;
}

export const Register: React.FC<RegisterProps> = ({ onTabChange }) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	const handleGetCode = () => {
		onTabChange("code")
	}

	return (
		<div>
			<Formik
				initialValues={{
					phone: "",
				}}
				onSubmit={() => {
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
							name="Телефон"
							onChange={handleChange}
							onBlur={handleBlur}
							//value={values.phone}

						/>
						<button className={styles.but_entrance}  onClick={() => onTabChange("code")}>Получить код</button>
						<div className={styles.but_green}>
							<button onClick={() => onTabChange("login")}>Я уже зарегистировался(-ась)</button>
						</div>
						<button className={styles.but_partner} onClick={() => onTabChange("partner-login")}>Вход для партнёров</button>
					</Form>
				)}

			</Formik>
		</div>

	)
}
