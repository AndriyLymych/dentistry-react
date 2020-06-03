import {Route, Switch} from "react-router-dom";
import Main from "../components/Main/Main";
import AboutUs from "../components/AboutUs/AboutUs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import OurDoctorsContainer from "../components/OurDoctors/OurDoctorsContainer";
import DoctorProfileContainer from "../components/OurDoctors/OurDoctorsCard/DoctorProfile/DoctorProfileContainer";
import OurServicesContainer from "../components/OurServices/OurServicesContainer";
import ServiceProfileContainer from "../components/OurServices/ServiceCard/ServiceProfile/ServiceProfileContainer";
import MyProfileContainer from "../components/MyProfile/MyProfileContainer";
import React from "react";
import Reception from "../components/Reception/Reception";
import SendMailForRememberPassword
    from "../components/ForgotPassword/SendMailForRememberPassword/SendMailForRememberPassword";
import ResetPassword from "../components/ForgotPassword/ResetPassword/ResetPassword";

const routes = ()=> {
    return (

        <Switch>
            <Route path='/' exact render={() => <Main/>}/>
            <Route path='/about-us' render={() => <AboutUs/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/register' render={() => <Register/>}/>
            <Route path='/our-doctors' exact render={() => <OurDoctorsContainer/>}/>
            <Route path='/our-doctors/:id' render={() => <DoctorProfileContainer/>}/>
            <Route path='/our-services' exact render={() => <OurServicesContainer/>}/>
            <Route path='/our-services/:id' render={() => <ServiceProfileContainer/>}/>
            <Route path='/my-profile'  render={() => <MyProfileContainer/>}/>
            <Route path='/reception-service'  render={() => <Reception/>}/>
            <Route path='/forgot-password'  render={() => <SendMailForRememberPassword/>}/>
            <Route path='/auth/password-refresh/:token'  render={() => <ResetPassword/>}/>
            <Route path='*'  render={() => <h1>404 error</h1>}/>
        </Switch>
    )
};

export default routes;