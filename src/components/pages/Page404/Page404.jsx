import React from "react";
import style from './Page404.module.css'
import Footer from "../../basic/Footer/Footer";
import logo from '../../../assets/img/404logo.png'

const Page404 = () => {
    return(
        <div>
            <div className={style.page404Container}>
                <div className={style.page404Logo}>
                    <div className={style.page404LogoNumber}>4</div>
                    <div >
                        <img  className={style.page404LogoImg} src={logo} alt=""/>
                    </div>
                    <div className={style.page404LogoNumber +' '+style.rightNumber}>4</div>
                </div>
                <div className={style.page404Error}>
                    Сторінку
                    не знайдено
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Page404;