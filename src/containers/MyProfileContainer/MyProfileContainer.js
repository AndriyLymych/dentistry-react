import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import MyProfile from "../../components/basic/MyProfile/MyProfile";
import {updateDoctorProfilePhoto, updateUserDates} from "../../redux/reducers/authReducer/thunks";

const mapStateToProps = state => {

    return {
        isAuth: state.authReducer.isAuth,
        me: state.authReducer.me,
        isProfileUpdate:state.authReducer.isProfileUpdate,
        errorMessage: state.authReducer.updateDoctorPhotoErrMsg,

    }
};

const MyProfileWithRouter = withRouter(MyProfile);

export default compose(connect(mapStateToProps, {
    updateUserDates,
    updateDoctorProfilePhoto,

}))(MyProfileWithRouter);