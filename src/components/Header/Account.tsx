import React from "react";
import money from "../../images/Frame 3.png"
import avatar from '../../images/avatar.svg'
import styles from "./Account.module.sass"
import place from "../../images/view-box.png";
export  const Account=()=>{
    return(
        <div className={styles.block}>
            <div className={styles.place}>
               <div> <img src={place} alt={'place'}/></div>
                <span className={styles.text2}>Казань</span>
            </div>
            <div className={styles.money}>
                <div> <img src={money} alt={'money'}/></div>
                <span className={styles.text}>1000</span>

            </div>
            <div className={styles.avatar}>
               <div> <img src={avatar} alt={'avatar'}/></div>
                <span className={styles.text2} >Алексей</span>
            </div>
        </div>
    )
}
