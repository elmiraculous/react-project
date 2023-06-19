import React, {useEffect} from "react"
import * as Yup from "yup"
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
	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Некорректный формат email").required("Email обязателен"),
		phone_number: Yup.string().required("Номер телефона обязателен"),
		password: Yup.string().required("Пароль обязателен"),
		balance: Yup.number().required("Баланс обязателен"),
	})

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
				validationSchema={validationSchema}
				onSubmit={handleRegister}

			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					errors,
					touched,
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
								autoComplete="off"

							/>
						</label>
						{touched.email && errors.email && <div className={styles.errors}>{errors.email}</div>}

						<label className={styles.input}>
							<input
								type="text"
								name='phone_number'
								placeholder="Номер телефона"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone_number}
								autoComplete="off"
							/>
						</label>
						{touched.phone_number && errors.phone_number &&
                            <div className={styles.errors}>{errors.phone_number}</div>}

						<label className={styles.input}>
							<input
								type="password"
								name='password'
								placeholder="Пароль"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								autoComplete="off"
							/>
						</label>
						{touched.password && errors.password && <div className={styles.errors}>{errors.password}</div>}

						<label className={styles.input}>
							<input
								type="text"
								name='balance'
								placeholder="Баланс"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.balance}
								autoComplete="off"
							/>
						</label>
						{touched.balance && errors.balance && <div className={styles.errors}>{errors.balance}</div>}


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
