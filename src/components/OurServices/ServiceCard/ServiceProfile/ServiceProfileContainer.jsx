import * as React from "react";
import ServiceProfile from "./ServiceProfile";
import {compose} from "redux";
import {connect} from "react-redux";
import {isLoadingProfileSelector, serviceProfileSelector} from "../../../../redux/selectors/serviceProfileSelectors";
import {getServiceProfile} from "../../../../redux/reducers/serviceProfileReducer";
import {withRouter} from "react-router-dom";

class ServiceProfileContainer extends React.Component {

    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getServiceProfile(id)
    }

    render() {
        return <ServiceProfile serviceProfile={this.props.serviceProfile} isLoading={this.props.isLoading}/>
    }

}

const mapStateToProps = state => {
    return {
        serviceProfile: serviceProfileSelector(state),
        isLoading: isLoadingProfileSelector(state)
    }
};

const ServiceProfileContainerWithRouter = withRouter(ServiceProfileContainer);

export default compose(connect(mapStateToProps, {getServiceProfile})(ServiceProfileContainerWithRouter));