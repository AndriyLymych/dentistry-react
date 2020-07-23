import React from "react";
import style from './MainAboutUs.module.css';
import mainAboutImg from '../../../assets/img/main-about.png'
import {NavLink} from "react-router-dom";

const MainAboutUs = () => {
    return (
            <div className={style.mainAboutContainer}>
                <div className={style.mainAboutInfo}>
                    <h3 className={style.mainAboutTitle}>Чому варто обрати нас?</h3>
                    <p className={style.mainAboutDescription}>В нашій клініці Ви знайдете найсучасніше обладнання, передові
                        технології та найкращих спеціалістів своєї справи!</p>
                    <NavLink className={style.mainAboutBtn}  to={'/our-doctors'}>Наша команда</NavLink>
                </div>
                <div className={style.mainAboutImg}>
                    <img src={mainAboutImg} alt=""/>
                </div>
            </div>
    )
};

export default MainAboutUs;