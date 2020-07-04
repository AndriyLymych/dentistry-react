import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import MyReceptionsContainer from "../MyReceptions/MyReceptionsContainer";
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import ChangePasswordContainer from "./ChangePassword/ChangePasswordContainer";
import {USER_ROLE} from "../../constant/userConstant/userRole";
import Register from "../Register/Register";
import RegisterDoctor from "../RegisterDoctor/RegisterDoctor";
import BlockUserContainer from "../BlockUser/BlockUserContainer";
import UnlockUserContainer from "../UnlockUser/UnlockUserContainer";
import AddMedicalService from "../AddMedicalService/AddMedicalService";
import DeleteMedicalService from "../DeleteMedicalService/DeleteMedicalService";
import Reception from "../Reception/Reception";


const MyProfile = ({
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
                                {
                                    me.UserRole.label === USER_ROLE.PATIENT &&
                                    <li><NavLink to={`/my-profile/my-receptions`}>Мої записи на прийом</NavLink></li>
                                }
                                {
                                    me.UserRole.label === USER_ROLE.DOCTOR &&
                                    <li><NavLink to={`/my-profile/reception-patient`}>Записати на прийом</NavLink></li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.DOCTOR &&
                                    <li><NavLink to={`/my-profile/receptions`}>Записи на прийом</NavLink></li>

                                }


                                <li><NavLink to={`/my-profile/change-password`}>Змінити пароль</NavLink></li>

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-admin`}>Зареєструвати нового
                                        адміністратора</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/register-doctor`}>Зареєструвати лікаря</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/block-user`}>Заблокувати користувача</NavLink></li>

                                }

                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/unlock-user`}>Розблокувати користувача</NavLink></li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/add-service`}>Додати нову медичну послугу</NavLink>
                                    </li>

                                }
                                {
                                    me.UserRole.label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/delete-service`}>Видалити медичну послугу</NavLink>
                                    </li>

                                }


                            </ul>
                        </nav>

                        <Switch>
                            {
                                me.UserRole.label === USER_ROLE.PATIENT &&
                                <Route path={`/my-profile/my-receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            {
                                me.UserRole.label === USER_ROLE.DOCTOR &&
                                <Route path={`/my-profile/receptions`} exact
                                       render={() => <MyReceptionsContainer/>}/>
                            }
                            {
                                me.UserRole.label === USER_ROLE.DOCTOR &&
                                <Route path={`/my-profile/reception-patient`} exact
                                       render={() => <Reception/>}/>
                            }
                            <Route path={`/my-profile/info`} exact
                                   render={() => <MyProfileInfo me={me} avatar={me.avatar}/>}/>

                            <Route path={`/my-profile/change-password`} exact
                                   render={() => <ChangePasswordContainer/>}/>

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-admin`} exact render={() => <Register/>}/>

                            }

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/register-doctor`} exact render={() => <RegisterDoctor/>}/>

                            }

                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/block-user`} exact render={() => <BlockUserContainer/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/unlock-user`} exact render={() => <UnlockUserContainer/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/add-service`} exact render={() => <AddMedicalService/>}/>

                            }
                            {
                                me.UserRole.label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/delete-service`} exact
                                       render={() => <DeleteMedicalService/>}/>

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