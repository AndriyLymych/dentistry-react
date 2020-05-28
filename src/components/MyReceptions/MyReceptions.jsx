import React from "react";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";

const MyReceptions = ({isLoading, receptions, isAuth}) => {
    return (
        <div>
            {isLoading && isAuth ? <Preloader/> :
                <div>
                    {
                        receptions.length > 0 ?
                            <div>{receptions.map(item=><div>
                                <div> Послуга: {item.MedicalService.service}</div>
                                <div>Ціна: {item.MedicalService.price}</div>
                                <div>Час: {item.date}</div>
                            </div>)}</div>:
                           <div>
                               <div>У вас немає активних записів.Запишіться на прийом</div>
                               <NavLink to={'/reception-service'}>
                                   <button>Записатися на прийом</button>
                               </NavLink>
                           </div>
                    }
                </div>

            }
        </div>
    )
};

export default MyReceptions