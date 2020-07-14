import {compose} from "redux";
import {connect} from "react-redux";
import {getDoctorProfile} from "../../redux/reducers/doctorProfileReducer/thunks";
import {withRouter} from "react-router-dom";
import {
    deleteChosenComment,
    editChosenComment,
    getCommentsFromDB,
    sendComment
} from "../../redux/reducers/commentReducer/thunks";
import {getAverageDoctorMark, getIsEvaluatedDoctor, setDoctorMark} from "../../redux/reducers/doctorMarkReducer/thunks";
import DoctorProfile from "../../components/pages/DoctorProfile/DoctorProfile";

const mapStateToProps = state => {
    return {
        doctorProfile: state.doctorProfileReducer.doctorProfile,
        isLoading: state.doctorProfileReducer.isLoading,
        isLoadingComments: state.commentReducer.isLoadingComments,
        commentInfo: state.commentReducer.commentInfo,
        pageCount: state.commentReducer.pageCount,
        commentsCountOnPage: state.commentReducer.commentsCountOnPage,
        currentPage: state.commentReducer.currentPage,
        isAuth: state.authReducer.isAuth,
        myID: state.authReducer.myID,
        doctorMark: state.doctorMarkReducer.mark,
        isEvaluated: state.doctorMarkReducer.isEvaluated,
        isMarkLoading: state.doctorMarkReducer.isMarkLoading,
        me: state.authReducer.me
    }
};

const DoctorProfileContainerWithRouter = withRouter(DoctorProfile);

export default compose(connect(mapStateToProps, {
    getDoctorProfile,
    getCommentsFromDB,
    sendComment,
    deleteChosenComment,
    editChosenComment,
    setDoctorMark,
    getIsEvaluatedDoctor,
    getAverageDoctorMark
})(DoctorProfileContainerWithRouter));