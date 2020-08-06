import React from 'react';
import './App.module.css';
import Footer from "./components/basic/Footer/Footer";
import style from './App.module.css'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/reducers/appReducer/thunks";
import {compose} from "redux";
import Preloader from "./components/basic/Preloader/Preloader";
import routes from "./router/routes";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized || this.props.isRefreshLoading) {
            return <Preloader/>
        }

        return (

            <div className={style.appContainer}>

                <HeaderContainer/>
                {routes()}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.appReducer.initialized,
        isRefreshLoading: state.refreshReducer.isRefreshLoading
    }
};

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)
