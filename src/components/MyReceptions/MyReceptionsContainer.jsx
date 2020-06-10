import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getLoadingReceptionsProgressSelector,
    getMyReceptionsSelector
} from "../../redux/selectors/myReceptionSelectors";
import {
    deleteReceptionRecordByDoctor,
    deleteReceptionRecordByPatient,
    getAllReception,
    getMyProfileReceptions
} from "../../redux/reducers/myReceptionReducer";
import MyReceptions from "./MyReceptions";
import {isAuthSelector, meInfoSelector} from "../../redux/selectors/authSelectors";
import {withRouter} from "react-router-dom";
import {USER_ROLE} from "../../constant/userConstant/userRole";

class MyReceptionsContainer extends React.Component {

    componentDidMount() {

        if (this.props.isAuth && (this.props.me.UserRole.label === USER_ROLE.DOCTOR)){
            this.props.getAllReception()
        }
        if (this.props.isAuth && (this.props.me.UserRole.label === USER_ROLE.DOCTOR)){
            this.props.getMyProfileReceptions(this.props.me.email)
        }
        if (!this.props.isAuth){
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <MyReceptions
                isAuth={this.props.isAuth}
                receptions={this.props.receptions}
                isLoading={this.props.isLoading}
                me={this.props.me}
                deleteReceptionRecordByPatient={deleteReceptionRecordByPatient}
                deleteReceptionRecordByDoctor={deleteReceptionRecordByDoctor}
            />

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
};

const MyReceptionsWithRouter = withRouter(MyReceptionsContainer);

export default compose(connect(mapStateToProps, {
        getMyProfileReceptions,
        getAllReception,
        deleteReceptionRecordByPatient,
        deleteReceptionRecordByDoctor
    }
))(MyReceptionsWithRouter)