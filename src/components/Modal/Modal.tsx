import React, {useEffect, useState} from 'react'
import styles from './Modal.module.sass'
import {createPortal} from "react-dom";

interface Props{
    visible: boolean;
    onClose: ()=> void;
}
export const Modal=({visible,onClose}:Props)=>{
    const [container]=useState(document.createElement('div'))
    container.classList.add('portal-root')

    useEffect(()=>{
        document.body.appendChild(container)

        return()=> {
                document.body.removeChild(container)
            }
    }, [])
    if(!visible) return <></>

    return createPortal(
        <>
            <div className={styles.overlay} onClick={()=>onClose()}>
                <div className={styles.modal}>rrhteszdfhgdgd</div>
            </div>
        </>,
        container
    )
}