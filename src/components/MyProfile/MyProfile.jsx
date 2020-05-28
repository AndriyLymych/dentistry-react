import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MyReceptionsContainer from "../MyReceptions/MyReceptionsContainer";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";


const MyProfile = ({
                       id,
                       isAuth,
                       me
                   }) => {
    return (
        <div>
            {
                isAuth ?
                    <div>
                        <nav>
                            <ul>
                                <li><NavLink to={`/my-profile/info`}>Інформація про мене</NavLink></li>
                                <li><NavLink to={`/my-profile/my-receptions`}>Мої записи на прийом</NavLink></li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path={`/my-profile`} exact render={() => <Redirect to={`/my-profile/info`}/>}/>
                            <Route path={`/my-profile/my-receptions`} exact render={() => <MyReceptionsContainer/>}/>
                            <Route path={`/my-profile/info`} exact render={() => <MyProfileInfo me={me}/>}/>
                        </Switch>
                    </div> :

                    <Redirect to={'/login'}/>
            }
        </div>
    )
};

export default MyProfile