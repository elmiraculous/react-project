import React, {useRef, useState} from "react"
import styles from "./Modal.module.sass"
import {Portal} from "../Portal/Portal"
import {UseModalHooks} from "../hooks/UseModalHooks"
import {Icon} from "../Icon/Icon"
import {Login} from "./component/Login"
import {Register} from "./component/Register"
import {Code} from "./component/Code"
import {PartnerLogin} from "./component/PartnerLogin"


interface Props {
    visible: boolean;
    onClose: () => void;

}

export const Modal = ({visible, onClose}: Props) => {
	const [tab, setTab] = useState<string>("login")

	const handleTabChange = (tabName: string) => {
		setTab(tabName)
	}
	const ref = useRef<HTMLDivElement>(null)
	UseModalHooks(ref, () => onClose())
	return (
		<>
			{visible &&
                <Portal>

                	<div className={styles.overlay} ref={ref}>
                		<div className={styles.modal}>
                			<div className={styles.block}>
                				<div
                					className={styles.text}>{tab === "login" ? "Вход" : tab === "register" ? "Регистрация" : tab === "code" ? "Ввести код" : tab === "partner-login" ? "Вход для партнеров" : ""}</div>
                				<button onClick={onClose}><Icon width={18} name={"cross"}/></button>
                			</div>
                			{tab === "login" && <Login onTabChange={handleTabChange}/>}
                			{tab === "register" && <Register onTabChange={handleTabChange}/>}
                			{tab === "code" && <Code onTabChange={handleTabChange}/>}
                			{tab === "partner-login" && (<PartnerLogin onTabChange={handleTabChange}/>)}
                		</div>
                	</div>
                </Portal>
			}
		</>
	)
}