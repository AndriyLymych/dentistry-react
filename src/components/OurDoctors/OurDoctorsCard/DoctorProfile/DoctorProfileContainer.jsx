import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, doctorProfileSelector} from "../../../../redux/selectors/doctorProfileSelectors";
import {getDoctorProfile} from "../../../../redux/reducers/doctorProfileReducer";
import {withRouter} from "react-router-dom";
import DoctorProfile from "./DoctorProfile";
import {deleteChosenComment, getCommentsFromDB, sendComment} from "../../../../redux/reducers/commentReducer";
import {
    commentInfoSelector, commentsCountOnPageSelector, currentPageSelector,
    isLoadingCommentsSelector, pageCountSelector,
} from "../../../../redux/selectors/commentSelectors";
import {isAuthSelector, meInfoSelector} from "../../../../redux/selectors/authSelectors";


class DoctorProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getDoctorProfile(id);
        this.props.getCommentsFromDB(id, this.props.commentsCountOnPage, this.props.currentPage);

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
            me={this.props.me}
            deleteChosenComment={this.props.deleteChosenComment}
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
        me: meInfoSelector(state)
    }
};

const DoctorProfileContainerWithRouter = withRouter(DoctorProfileContainer);

export default compose(connect(mapStateToProps, {
    getDoctorProfile,
    getCommentsFromDB,
    sendComment,
    deleteChosenComment
})(DoctorProfileContainerWithRouter));