import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MyReceptionsContainer from "../MyReceptions/MyReceptionsContainer";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import ChangePasswordContainer from "./ChangePassword/ChangePasswordContainer";
import {USER_ROLE} from "../../constant/userConstant/userRole";
import Register from "../Register/Register";
import RegisterDoctor from "../RegisterDoctor/RegisterDoctor";


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
                                {
                                    label === USER_ROLE.DOCTOR &&
                                    <li><NavLink to={`/my-profile/receptions`}>Записи на прийом</NavLink></li>

                                }

                                <li><NavLink to={`/my-profile/change-password`}>Змінити пароль</NavLink></li>

                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-admin`}>Зареєструвати нового
                                        адміністратора</NavLink></li>

                                }
                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-doctor`}>Зареєструвати лікаря</NavLink></li>

                                }


                            </ul>
                        </nav>

                        <Switch>
                            {
                                label === USER_ROLE.PATIENT &&
                                <Route path={`/my-profile/my-receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            {
                                label === USER_ROLE.DOCTOR &&
                                <Route path={`/my-profile/receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            <Route path={`/my-profile/info`} exact
                                   render={() => <MyProfileInfo me={me} avatar={me.avatar}/>}/>

                            <Route path={`/my-profile/change-password`} exact
                                   render={() => <ChangePasswordContainer/>}/>

                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-admin`} exact render={() => <Register/>}/>

                            }

                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-doctor`} exact render={() => <RegisterDoctor/>}/>

                            }

                            <Route path={`/my-profile`} render={() => <Redirect to={`/my-profile/info`}/>}/>

                        </Switch>
                    </div> :

                    <Redirect to={'/login'}/>
            }
        </div>
    )
};

export default MyProfile