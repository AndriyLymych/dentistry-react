import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, doctorProfileSelector} from "../../../../redux/selectors/doctorProfileSelectors";
import {getDoctorProfile} from "../../../../redux/reducers/doctorProfileReducer";
import {withRouter} from "react-router-dom";
import DoctorProfile from "./DoctorProfile";
import {
    deleteChosenComment,
    editChosenComment,
    getCommentsFromDB,
    sendComment
} from "../../../../redux/reducers/commentReducer";
import {
    commentInfoSelector, commentsCountOnPageSelector, currentPageSelector,
    isLoadingCommentsSelector, pageCountSelector,
} from "../../../../redux/selectors/commentSelectors";
import {isAuthSelector, myIDSelector} from "../../../../redux/selectors/authSelectors";
import {getDoctorMark, isEvaluated, isMarkLoading} from "../../../../redux/selectors/doctorMarkSelectors";
import {getAverageDoctorMark, getIsEvaluatedDoctor, setDoctorMark} from "../../../../redux/reducers/doctorMarkReducer";
import {checkAccessTokenPresent} from "../../../../helpers/checkAccessTokenPresent";


class DoctorProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getDoctorProfile(id);

        this.props.getCommentsFromDB(id, this.props.commentsCountOnPage, this.props.currentPage);

        this.props.getAverageDoctorMark(id);

        const token = checkAccessTokenPresent();

        if (token && this.props.isEvaluated){
            this.props.getIsEvaluatedDoctor(id)
        }

    }


    onChangePage = page => {
        const id = this.props.match.params.id;

        this.props.getCommentsFromDB(id, this.props.commentsCountOnPage, page)

    };

    render() {
        return <DoctorProfile
            doctorProfile={this.props.doctorProfile}
            isLoading={this.props.isLoading}
            isLoadingComments={this.props.isLoadingComments}
            commentInfo={this.props.commentInfo}
            pageCount={this.props.pageCount}
            commentsCountOnPage={this.props.commentsCountOnPage}
            currentPage={this.props.currentPage}
            getNewPortionOfComments={this.props.getCommentsFromDB}
            onChangePage={this.onChangePage}
            doctorId={this.props.match.params.id}
            sendComment={this.props.sendComment}
            isAuth={this.props.isAuth}
            myID={this.props.myID}
            deleteChosenComment={this.props.deleteChosenComment}
            editChosenComment={this.props.editChosenComment}
            setDoctorMark={this.props.setDoctorMark}
            doctorMark={this.props.doctorMark}
            isEvaluated={this.props.isEvaluated}
            isMarkLoading={this.props.isMarkLoading}

        />
    }

}

const mapStateToProps = state => {
    return {
        doctorProfile: doctorProfileSelector(state),
        isLoading: isLoadingProfileSelector(state),
        isLoadingComments: isLoadingCommentsSelector(state),
        commentInfo: commentInfoSelector(state),
        pageCount: pageCountSelector(state),
        commentsCountOnPage: commentsCountOnPageSelector(state),
        currentPage: currentPageSelector(state),
        isAuth: isAuthSelector(state),
        myID: myIDSelector(state),
        doctorMark:getDoctorMark(state),
        isEvaluated:isEvaluated(state),
        isMarkLoading:isMarkLoading(state)
    }
};

const DoctorProfileContainerWithRouter = withRouter(DoctorProfileContainer);

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