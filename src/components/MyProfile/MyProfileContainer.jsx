import React from "react";
import MyProfile from "./MyProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {isAuthSelector, meInfoSelector} from "../../redux/selectors/authSelectors";

class MyProfileContainer extends React.Component {


    render() {

        return <MyProfile isAuth={this.props.isAuth} me={this.props.me}/>;
    }
}

const mapStateToProps = state => {

    return {
        isAuth: isAuthSelector(state),
        me: meInfoSelector(state)
    }
};

const MyProfileWithRouter = withRouter(MyProfileContainer);

export default compose(connect(mapStateToProps, null))(MyProfileWithRouter);