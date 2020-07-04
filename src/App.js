import React from 'react';
import './App.module.css';
import Footer from "./components/Footer/Footer";
import style from './App.module.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/reducers/appReducer";
import {compose} from "redux";
import Preloader from "./components/Preloader/Preloader";
import routes from "./router/routes";
import {isRefreshLoadingSelector} from "./redux/selectors/authSelectors";


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
                <Footer/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.appReducer.initialized,
        isRefreshLoading: isRefreshLoadingSelector(state)
    }
};

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)
