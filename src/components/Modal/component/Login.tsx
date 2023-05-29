import React, {useEffect} from "react"
import * as Yup from "yup"
import styles from "../Modal.module.sass"
import {Formik} from "formik"
import {useAuthorizationMutation} from "../../store/auth"
import {AuthenticationRequest} from "../../../app/models/generated"


interface LoginProps {
    onTabChange: (tabName: string) => void;
}

export const Login: React.FC<LoginProps> = ({onTabChange}) => {
	const [login, {data, isLoading, isSuccess}] = useAuthorizationMutation()

	useEffect(() => {
		if (isSuccess) {
			// закрыть модалку и открыть аккаунт и сделать баланс
			//пока так
			window.open("/Account/PromoCodes", "_blank")
		}
	}, [isSuccess])

	const handleSubmit = (formData: AuthenticationRequest) => {
		login(formData)
	}

	const validationSchema = Yup.object().shape({
		login: Yup.string().required("Телефон обязателен"),
		password: Yup.string().required("Пароль обязателен"),
	})


	return (
		<div>
			<Formik
                <AuthenticationRequest>
				initialValues={{
					login: "",
					password: ""
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}

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
								type="text"
								name="login"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
								placeholder="Телефон"
								autoComplete="off"
							/>
						</label>
						{touched.login && errors.login && <div className={styles.errors}>{errors.login}</div>}

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

						<button disabled={isLoading} type='submit' className={styles.but_entrance}>Войти</button>
						<div className={styles.but_green}>
							<button onClick={() => onTabChange("code")}>Войти с помощью смс</button>
							<button onClick={() => onTabChange("register")}>Регистрация</button>
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