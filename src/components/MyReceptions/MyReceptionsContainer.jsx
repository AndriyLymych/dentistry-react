import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getLoadingReceptionsProgressSelector,
    getMyReceptionsSelector
} from "../../redux/selectors/myReceptionSelectors";
import {getMyProfileReceptions} from "../../redux/reducers/myReceptionReducer";
import MyReceptions from "./MyReceptions";
import {isAuthSelector, meInfoSelector} from "../../redux/selectors/authSelectors";
import {withRouter} from "react-router-dom";

class MyReceptionsContainer extends React.Component {

    componentDidMount() {

        this.props.isAuth ? this.props.getMyProfileReceptions(this.props.me.email) : this.props.history.push('/login')

    }

    render() {
        return (
            <MyReceptions isAuth={this.props.isAuth} receptions={this.props.receptions}
                          isLoading={this.props.isLoading}/>

        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getLoadingReceptionsProgressSelector(state),
        receptions: getMyReceptionsSelector(state),
        me: meInfoSelector(state),
        isAuth: isAuthSelector(state)

    }
}

const MyReceptionsWithRouter = withRouter(MyReceptionsContainer);

export default compose(connect(mapStateToProps, {getMyProfileReceptions}))(MyReceptionsWithRouter)