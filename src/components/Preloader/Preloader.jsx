import React from "react";
import preloaderImg from '../../assets/img/preloader.svg'
import style from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={style.preloaderContainer}>
            <img src={preloaderImg} alt="loading..." height={'100%'} width={'100%'}/>
        </div>
    )
};

export default Preloader