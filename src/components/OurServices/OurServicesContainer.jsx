import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import OurServices from "./OurServices";
import {
    getLoadingProgressSelector,
    getServicesSelector
} from "../../redux/selectors/serviceSelector";
import {getServicesFromDB} from "../../redux/reducers/serviceReducer";

class OurServicesContainer extends React.Component {

    componentDidMount() {
        this.props.getServicesFromDB()
    }

    render() {
        return (
            <OurServices services={this.props.services} isLoading={this.props.isLoading}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        services: getServicesSelector(state),
        isLoading: getLoadingProgressSelector(state)
    }
};

export default compose(connect(mapStateToProps,{getServicesFromDB})(OurServicesContainer))