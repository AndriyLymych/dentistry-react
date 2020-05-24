import React from "react";
import Header from "./Header";
import {isAuthSelector, meInfoSelector} from "../../redux/selectors/authSelectors";
import {connect} from "react-redux";
import {logout} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header isAuth={this.props.isAuth} me={this.props.me} logout={this.props.logout}/>
    }

}

const mapStateToProps = state => {

    return {
        isAuth: isAuthSelector(state),
        me: meInfoSelector(state)
    }
};
export default connect(mapStateToProps,{logout})(HeaderContainer)