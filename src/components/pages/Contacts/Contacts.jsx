import React from "react";
import contactsImg from '../../../assets/img/Contacts.png'
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contactsContainer}>
            <div>
                <h3> ЗАПИСАТИСЬ НА ПРИЙОМ:</h3>
                <p>+38 067 744 11 57</p>
                <p>+38 093 408 19 20</p>
                <p>+38 044 433 53 97</p>
                <p>simstomat@gmail.com</p>
            </div>
            <div>
                <h3>АДРЕСА:</h3>
                <p>
                    проспект Правди, 72
                </p>
            </div>
            <div>
                <h3>ГРАФІК РОБОТИ:</h3>
                <p>Пн-пт з 9:00 до 20:00</p>
            </div>
            <div>
                <img src={contactsImg} className={style.constantsImg} alt='contact-img'/>
            </div>
        </div>
    )
};

export default Contacts