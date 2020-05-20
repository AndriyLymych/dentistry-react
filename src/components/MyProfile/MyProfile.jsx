import React from "react";
import {NavLink, Redirect} from "react-router-dom";

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
        </div>
    )
};

export default MyProfile