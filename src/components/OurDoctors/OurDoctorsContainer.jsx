import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDoctors} from "../../redux/reducers/doctorReducer";
import OurDoctors from "./OurDoctors";
import {getDoctorsSelector, getLoadingProgressSelector} from "../../redux/selectors/doctorSelectors";

class OurDoctorsContainer extends React.Component {

    componentDidMount() {

        this.props.getDoctors()
    }

    render() {
        return (
            <OurDoctors doctors={this.props.doctors} isLoading={this.props.isLoading}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: getLoadingProgressSelector(state),
        doctors: getDoctorsSelector(state)
    }
}

export default compose(connect(mapStateToProps,{getDoctors}))(OurDoctorsContainer)