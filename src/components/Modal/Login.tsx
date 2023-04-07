import React from "react";
import styles from "./Modal.module.sass"
import {Form, Formik, Field} from "formik";

interface LoginProps {
    onTabChange: (tabName: string) => void;
}

export const Login: React.FC<LoginProps> = ({onTabChange}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    phone: '',
                    password: ''
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
                        <div className={styles.text}>Вход</div>
                        <Field
                            className={styles.input}
                            type="text"
                            name="Телефон"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}

                        />

                        <Field
                            className={styles.input}
                            type="password"
                            name="Пароль"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            //value={values.password}
                        />
                        <button className={styles.but_entrance}>Войти</button>
                        <div className={styles.but_green}>
                            <button onClick={() => onTabChange("code")}>Войти с помощью смс</button>
                            <button onClick={() => onTabChange("register")}>Регистрация</button>
                        </div>
                        <button className={styles.but_partner} onClick={() => onTabChange("partner-login")}>Вход для партнёров</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}