import * as React from "react";
import ServiceProfile from "./ServiceProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, serviceProfileSelector} from "../../../../redux/selectors/serviceProfileSelectors";
import {getServiceProfile} from "../../../../redux/reducers/serviceProfileReducer";
import {withRouter} from "react-router-dom";
import {meInfoSelector} from "../../../../redux/selectors/authSelectors";
import {updateMedicalService} from "../../../../redux/reducers/serviceReducer";

class ServiceProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getServiceProfile(id)
    }

    render() {
        return <ServiceProfile
            serviceProfile={this.props.serviceProfile}
            isLoading={this.props.isLoading}
            userRole={this.props.me.UserRole.label}
            updateMedicalService={this.props.updateMedicalService}
        />
    }

}

const mapStateToProps = state => {
    return {
        serviceProfile: serviceProfileSelector(state),
        isLoading: isLoadingProfileSelector(state),
        me:meInfoSelector(state)
    }
};

const ServiceProfileContainerWithRouter = withRouter(ServiceProfileContainer);

export default compose(connect(mapStateToProps, {getServiceProfile,updateMedicalService})(ServiceProfileContainerWithRouter));