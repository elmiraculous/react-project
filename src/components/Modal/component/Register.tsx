import React, {useEffect} from "react"
import styles from "../Modal.module.sass"
import {Formik} from "formik"
import {NavLink} from "react-router-dom"
import {useRegistrationMutation} from "../../store/auth"
import {RegisterBody} from "../../../app/models/generated/profile.model"

interface RegisterProps {
    onTabChange: (tabName: string) => void;
}

export const Register: React.FC<RegisterProps> = ({onTabChange}) => {
	const [register, {data, isLoading, isSuccess}] = useRegistrationMutation()

	useEffect(() => {
		if (data && isSuccess) {
			// закрыть модалку
			//пока так
			<NavLink to={"/"}/>
		}
	}, [data, isSuccess])

	const handleRegister = (formData: RegisterBody) => {
		register(formData)
	}


	return (
		<div>
			<Formik
                <RegisterBody>
				initialValues={{
					email: "",
					phone_number: "",
					password: "",
					balance: "",
				}}
				onSubmit={handleRegister}

			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit} className={styles.form}>
						<label className={styles.input}>
							<input
								type="email"
								name="email"
								placeholder="Email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}

							/>
						</label>

						<label className={styles.input}>
							<input
								type="text"
								name='phone_number'
								placeholder="Номер телефона"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone_number}
							/>
						</label>

						<label className={styles.input}>
							<input
								type="password"
								name='password'
								placeholder="Пароль"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
						</label>

						<label className={styles.input}>
							<input
								type="text"
								name='balance'
								placeholder="Баланс"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.balance}
							/>
						</label>


						<button className={styles.but_entrance} disabled={isLoading} type='submit'>Зарегестрироваться
						</button>

						<div className={styles.but_green}>
							<button onClick={() => onTabChange("login")}>Я уже зарегистировался(-ась)</button>
						</div>
						<button className={styles.but_partner} onClick={() => onTabChange("partner-login")}>Вход для
                            партнёров
						</button>

					</form>
				)}

			</Formik>


		</div>

	)
}
