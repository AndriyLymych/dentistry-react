import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import MyReceptionsContainer from "../MyReceptions/MyReceptionsContainer";

const MyProfile = ({id,isAuth,me}) => {
    // TODO input type data
    return (
        <div>
            {
                isAuth ?
                    <nav>
                        <ul>
                            <li><NavLink to={`/my-profile/${id}`}>Інформація про мене</NavLink></li>
                            <li><NavLink to={`/my-profile/${id}/my-receptions`}>Мої записи на прийом</NavLink></li>
                            <li><NavLink to={`/my-profile/${id}/reception`}>Записатися на прийом</NavLink></li>

                            {/*<input id="datetime" type="datetime-local"/>*/}
                        </ul>
                    </nav>:

                    <Redirect to={'/login'}/>
            }
            <MyReceptionsContainer/>
        </div>
    )
};

export default MyProfile