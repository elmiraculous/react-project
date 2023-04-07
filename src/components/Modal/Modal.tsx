import React, {useRef, useState} from 'react'
import styles from './Modal.module.sass'
import {Portal} from "../Portal/Portal"
import {UseModalHooks} from "../hooks/UseModalHooks"
import {PartnerLogin} from "./PartnerLogin"
import {Register} from "./Register"
import {Code} from "./Code"
import {Login} from "./Login";

interface Props{
    visible: boolean;
    onClose: ()=> void;

}

enum ModalTabs{
    Login,
    Register,
    PartnerLogin,
    EnterCode,
}

export const Modal=({visible,onClose}:Props)=>{
    const [tab, setTab] = useState<string>("login");

    const handleTabChange = (tabName: string) => {
        setTab(tabName);
    };
    const ref=useRef<HTMLDivElement>(null)
    UseModalHooks(ref,()=>onClose())
    return  (
        <>
            {visible &&
                <Portal>
                    <div className={styles.overlay} ref={ref}>
                        <div className={styles.modal}>
                            {tab === "login" && <Login onTabChange={handleTabChange} />}
                            {tab === "register" && <Register onTabChange={handleTabChange} />}
                            {tab === "code" && <Code onTabChange={handleTabChange} />}
                            {tab === "partner-login" && (
                                <PartnerLogin onTabChange={handleTabChange} />
                            )}</div>
                    </div>
                </Portal>
            }
        </>
    )
}