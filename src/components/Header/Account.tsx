import React, {useState} from "react";
import money from "../../images/Frame 3.png"
import avatar from '../../images/avatar.svg'
import styles from "./Account.module.sass"
import {Modal} from "../Modal/Modal";
import {Icon} from "../Icon/Icon";
export  const Account=()=>{
    const [visible, setVisible]=useState(false)
    return(
        <div className={styles.block}>
            <div className={styles.place}>
               <div className={styles.pin} > <Icon  name='pin'/> </div>
                <span className={styles.text2}>Казань</span>
            </div>
            <div className={styles.money}>
                <div> <img src={money} alt={'money'}/></div>
                <span className={styles.text}>1000</span>

            </div>
            <div className={styles.avatar}>
               <div> <img src={avatar} alt={'avatar'}/></div>
                <Modal visible={visible} onClose={()=>setVisible(false)}/>
                <button className={styles.text2} onClick={()=> setVisible(true)} >Алексей</button>
            </div>
        </div>
    )
}
