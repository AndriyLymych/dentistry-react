import React from "react";
import contactsImg from '../../../assets/img/Contacts.png'
import style from './Contacts.module.css'
import Footer from "../../basic/Footer/Footer";

const Contacts = () => {
    return (
       <div>
           <div className={style.contactsContainer}>
               <div>

                   <div>
                       <h3 className={style.contactTitle}> ЗАПИСАТИСЬ НА ПРИЙОМ:</h3>
                       <p className={style.contactsInfo}>+38 067 744 11 57</p>
                       <p className={style.contactsInfo}>+38 093 408 19 20</p>
                       <p className={style.contactsInfo}>+38 044 433 53 97</p>
                       <p className={style.contactsInfo}>simstomat@gmail.com</p>
                   </div>
                   <div>
                       <h3 className={style.contactTitle}>АДРЕСА:</h3>
                       <p className={style.contactsInfo}>
                           проспект Правди, 72
                       </p>
                   </div>
                   <div>
                       <h3 className={style.contactTitle}>ГРАФІК РОБОТИ:</h3>
                       <p className={style.contactsInfo}>Пн-пт з 9:00 до 20:00</p>
                   </div>
               </div>

               <div>
                   <img src={contactsImg} alt='contact-img'/>
               </div>
           </div>
           <Footer/>
       </div>
    )
};

export default Contacts