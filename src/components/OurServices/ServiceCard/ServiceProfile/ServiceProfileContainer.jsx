import * as React from "react";
import ServiceProfile from "./ServiceProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, serviceProfileSelector} from "../../../../redux/selectors/serviceProfileSelectors";
import {getServiceProfile} from "../../../../redux/reducers/serviceProfileReducer";
import {withRouter} from "react-router-dom";
import {isAuthSelector, meInfoSelector} from "../../../../redux/selectors/authSelectors";
import {updateMedicalService, updateMedicalServicePhoto} from "../../../../redux/reducers/serviceReducer";
import {getErrorMsgSelector} from "../../../../redux/selectors/errorSelectors";

class ServiceProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getServiceProfile(id)
    }

    render() {
        return <ServiceProfile
            serviceProfile={this.props.serviceProfile}
            isLoading={this.props.isLoading}
            me={this.props.me}
            updateMedicalService={this.props.updateMedicalService}
            updateMedicalServicePhoto={this.props.updateMedicalServicePhoto}
            isAuth={this.props.isAuth}
            errorMessage={this.props.errorMessage}
        />
    }

}

const mapStateToProps = state => {
    return {
        serviceProfile: serviceProfileSelector(state),
        isLoading: isLoadingProfileSelector(state),
        me: meInfoSelector(state),
        isAuth: isAuthSelector(state),
        errorMessage: getErrorMsgSelector(state)
    }
};

const ServiceProfileContainerWithRouter = withRouter(ServiceProfileContainer);

export default compose(connect(mapStateToProps, {
    getServiceProfile,
    updateMedicalService,
    updateMedicalServicePhoto
})(ServiceProfileContainerWithRouter));