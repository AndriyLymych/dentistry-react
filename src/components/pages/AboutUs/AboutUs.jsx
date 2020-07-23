import React from "react";
import style from './AboutUs.module.css'
import OurDoctors from "../../../containers/OurDoctorsContainer/OurDoctorsContainer";

const AboutUs = () => {
    return (
      <div>
          <div className={style.aboutUsContainer}>
              <h2 className={style.aboutUsTitle}>ПРО НАС</h2>
              <p className={style.aboutUsText}>
                  Ми закуповуємо лише найкращу апаратуру європейських виробників. Її якість перевірено тисячами
                  стоматологій, а ефективність протестовано тисячами наших задоволених пацієнтів.
                  <br/>
                  Професійність наших лікарів підтверджено дипломами найкращих університетів України. Всі наші лікарі
                  мають багаторічний стаж роботи та постійно відвідують пофесійні тренінги та семінари аби покращувати
                  своє вміння.
                  <br/>
                  Для Вашої зручності наша клініка працює з 9 до 20 години, аби Вам не довелось відпрошуватись з роботи та
                  Ви завітали до нас після вирішення всіх своїх важливих справ.
              </p>
          </div>
          <OurDoctors/>
      </div>
    )
};

export default AboutUs