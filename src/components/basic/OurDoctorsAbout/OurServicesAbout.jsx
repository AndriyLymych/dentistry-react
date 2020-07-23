import React from "react";
import s from './OurServicesAbout.module.css'

const OurServicesAbout = () => {
    return (
        <div className={s.ourServicesAboutContainer}>
            <h2 className={s.ourServicesAboutTitle}>НАШІ ПОСЛУГИ</h2>
            <p className={s.ourServicesAboutDescription}>
                Наша стоматологія пропонує великий вибір послуг найвищої якості. Тут ви зможете
                довіритися лікареві, відчуєте уважне ставлення та індивідуальний підхід до кожного клієнта. Крім того,
                вас порадують доступні та відповідні рівню клініки ціни.
            </p>
        </div>
    )
};

export default OurServicesAbout