import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MyReceptionsContainer from "../MyReceptions/MyReceptionsContainer";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import ChangePasswordContainer from "./ChangePassword/ChangePasswordContainer";
import {USER_ROLE} from "../../constant/userConstant/userRole";


const MyProfile = ({
                       isAuth,
                       me,
                       me: {
                           UserRole: {
                               label
                           }
                       }
                   }) => {
    return (
        <div>
            {
                isAuth ?
                    <div>
                        <nav>
                            <ul>
                                <li><NavLink to={`/my-profile/info`}>Інформація про мене</NavLink></li>
                                {
                                    label === USER_ROLE.PATIENT &&
                                    <li><NavLink to={`/my-profile/my-receptions`}>Мої записи на прийом</NavLink></li>
                                }

                                <li><NavLink to={`/my-profile/change-password`}>Змінити пароль</NavLink></li>
                            </ul>
                        </nav>

                        <Switch>
                            {
                                label === USER_ROLE.PATIENT &&
                                <Route path={`/my-profile/my-receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            <Route path={`/my-profile/info`} exact render={() => <MyProfileInfo me={me}/>}/>
                            <Route path={`/my-profile/change-password`} exact
                                   render={() => <ChangePasswordContainer/>}/>
                            <Route path={`/my-profile`} render={() => <Redirect to={`/my-profile/info`}/>}/>

                        </Switch>
                    </div> :

                    <Redirect to={'/login'}/>
            }
        </div>
    )
};

export default MyProfile