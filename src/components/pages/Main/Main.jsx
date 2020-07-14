import React from "react";
import style from './Main.module.css'
import mainImg from '../../../assets/img/Vector_Smart_Object.png'
import {NavLink} from "react-router-dom";

const Main = () => {
    return <div className={style.mainContainer}>
        <div>
            <div className={style.mainInfo}>
                <h1 className={style.mainTitle}>Ми раді вітати вас в нашій
                    Стоматології.</h1>
                <p className={style.mainDescription}>Наша стоматологія - це новітня апаратура та висококваліфіковані
                    лікарі. Ми надаємо повний спектр
                    послуг, від консультації до протезування та художньої реставрації зубів. З нами Ви можете бути
                    впевнені у здоров'ї своїх зубів. Нашу професійність підтверджено сотнями задоволених клієнтів.</p>
                <button className={style.mainBtn}><NavLink className={style.link}
                                                           to={'/our-services'}> Послуги</NavLink></button>
            </div>
        </div>
        <div>
            <img src={mainImg} className={style.mainLogo} alt=""/>
        </div>
    </div>
};

export default Main