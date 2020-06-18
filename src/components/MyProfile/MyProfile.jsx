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

                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/block-user`}>Заблокувати користувача</NavLink></li>

                                }

                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/unlock-user`}>Розблокувати користувача</NavLink></li>

                                }
                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/add-service`}>Додати нову медичну послугу</NavLink>
                                    </li>

                                }
                                {
                                    label === USER_ROLE.ADMIN &&
                                    <li><NavLink to={`/my-profile/delete-service`}>Видалити медичну послугу</NavLink>
                                    </li>

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

                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/block-user`} exact render={() => <BlockUserContainer/>}/>

                            }
                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/unlock-user`} exact render={() => <UnlockUserContainer/>}/>

                            }
                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/add-service`} exact render={() => <AddMedicalService/>}/>

                            }
                            {
                                label === USER_ROLE.ADMIN &&
                                <Route path={`/my-profile/delete-service`} exact render={() => <DeleteMedicalService/>}/>

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