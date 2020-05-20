import React from 'react';
import './App.module.css';
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import style from './App.module.css'
import {Route, Switch} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import OurDoctorsContainer from "./components/OurDoctors/OurDoctorsContainer";
import Register from "./components/Register/Register";
import OurServicesContainer from "./components/OurServices/OurServicesContainer";
import ServiceProfileContainer from "./components/OurServices/ServiceCard/ServiceProfile/ServiceProfileContainer";
import DoctorProfileContainer from "./components/OurDoctors/OurDoctorsCard/DoctorProfile/DoctorProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/reducers/appReducer";
import {compose} from "redux";
import Preloader from "./components/Preloader/Preloader";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className={style.appContainer}>

                    <HeaderContainer/>

                    <Switch>
                        <Route path='/' exact render={() => <Main/>}/>
                        <Route path='/about-us' render={() => <AboutUs/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/register' render={() => <Register/>}/>
                        <Route path='/our-doctors' exact render={() => <OurDoctorsContainer/>}/>
                        <Route path='/our-doctors/:id' render={() => <DoctorProfileContainer/>}/>
                        <Route path='/our-services' exact render={() => <OurServicesContainer/>}/>
                        <Route path='/our-services/:id' render={() => <ServiceProfileContainer/>}/>
                        <Route path='/my-profile/:id' render={() => <MyProfileContainer/>}/>
                    </Switch>

                    <Footer/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.appReducer.initialized
    }
};

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)
