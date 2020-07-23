import React from "react";
import commonContactsImg from '../../../assets/img/CommonContactsImg.png'
import s from './CommonContacts.module.css';

const CommonContacts = () => {
    return(
        <div className={s.commonContactsContainer}>
            <div >
                <h3 className={s.commonContactsInfoTitle}>ЗАПИСАТИСЬ НА ПРИЙОМ:</h3>
                <div>
                    <p className={s.commonContactsInfoData} >Номери телефону: <br/><br/>
                        +38 067 744 11 57 <br/><br/>
                        +38 093 408 19 20 <br/><br/>
                        +38 044 433 53 97 <br/><br/>
                        Скринька: simstomat@gmail.com</p>
                </div>
            </div>
            <img  src={commonContactsImg} alt=""/>
        </div>
    )
};

export default CommonContacts