import React from "react";
import Header from "./Header";
import {isAuthSelector, meInfoSelector} from "../../redux/selectors/authSelectors";
import {connect} from "react-redux";
import {loginFacebookUrl, loginWithFacebook, logout} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header isAuth={this.props.isAuth} me={this.props.me} logout={this.props.logout}
                       isLoading={this.props.isLoading} loginWithFacebook={this.props.loginWithFacebook}
                       loginFacebookUrl={this.props.loginFacebookUrl}/>
    }

}

const mapStateToProps = state => {

    return {
        isAuth: isAuthSelector(state),
        me: meInfoSelector(state)
    }
};
export default connect(mapStateToProps, {logout, loginWithFacebook, loginFacebookUrl})(HeaderContainer)