import React from 'react';
import './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import style from './App.module.css'
import {Route, Switch} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import OurDoctorsContainer from "./components/OurDoctors/OurDoctorsContainer";
import Register from "./components/Register/Register";

class App extends React.Component {

    render() {
        return (
            <div className={style.appContainer}>
                    <Header/>

                    <Switch>
                        <Route path='/' exact render={() => <Main/>}/>
                        <Route path='/about-us' render={() => <AboutUs/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/register' render={() => <Register/>}/>
                        <Route path='/our-doctors' render={() => <OurDoctorsContainer/>}/>
                    </Switch>

                    <Footer/>

            </div>
        );
    }
}

export default App;
