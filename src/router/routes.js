import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../components/pages/Main/Main";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import RegisterContainer from "../containers/RegisterContainer/RegisterContainer";
import LoginContainer from "../containers/LoginContainer/LoginContainer";
import OurServicesContainer from "../containers/OurServicesContainer/OurServicesContainer";
import DoctorProfileContainer from "../containers/DoctorProfileContainer/DoctorProfileContainer";
import ServiceProfileContainer from "../containers/ServiceProfileContainer/ServiceProfileContainer";
import MyProfileContainer from "../containers/MyProfileContainer/MyProfileContainer";
import SendMailForRememberPasswordContainer
    from "../containers/SendMailForRememberPasswordContainer/SendMailForRememberPasswordContainer";
import ResetPasswordContainer from "../containers/ResetPasswordContainer/ResetPasswordContainer";
import OurDoctorsContainer from "../containers/OurDoctorsContainer/OurDoctorsContainer";
import Contacts from "../components/pages/Contacts/Contacts";
import Page404 from "../components/pages/Page404/Page404";

const routes = () => {
    return (

        <Switch>
            <Route path='/' exact render={() => <Main/>}/>
            <Route path='/about-us' render={() => <AboutUs/>}/>
            <Route path='/login' render={() => <LoginContainer/>}/>
            <Route path='/register' render={() => <RegisterContainer/>}/>
            <Route path='/our-doctors' exact render={() => <OurDoctorsContainer/>}/>
            <Route path='/our-doctors/:id' render={() => <DoctorProfileContainer/>}/>
            <Route path='/our-services' exact render={() => <OurServicesContainer/>}/>
            <Route path='/our-services/:id' render={() => <ServiceProfileContainer/>}/>
            <Route path='/my-profile' render={() => <MyProfileContainer/>}/>
            <Route path='/forgot-password' render={() => <SendMailForRememberPasswordContainer/>}/>
            <Route path='/auth/password-refresh/:token' render={() => <ResetPasswordContainer/>}/>
            <Route path='/auth-admin' render={() => <LoginContainer/>}/>
            <Route path='/contacts' render={() => <Contacts/>}/>
            <Route path='*' render={() => <Page404/>}/>
        </Switch>
    )
};

export default routes;