import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, doctorProfileSelector} from "../../../../redux/selectors/doctorProfileSelectors";
import {getDoctorProfile} from "../../../../redux/reducers/doctorProfileReducer";
import {withRouter} from "react-router-dom";
import DoctorProfile from "./DoctorProfile";

class DoctorProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getDoctorProfile(id);
    }

    render() {
        return <DoctorProfile doctorProfile={this.props.doctorProfile} isLoading={this.props.isLoading}/>
    }

}

const mapStateToProps = state => {
    return {
        doctorProfile: doctorProfileSelector(state),
        isLoading: isLoadingProfileSelector(state)
    }
};

const DoctorProfileContainerWithRouter = withRouter(DoctorProfileContainer);

export default compose(connect(mapStateToProps, {getDoctorProfile})(DoctorProfileContainerWithRouter));