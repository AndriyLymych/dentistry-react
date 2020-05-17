import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getDoctors} from "../../redux/reducers/doctorReducer";
import OurDoctors from "./OurDoctors";

class OurDoctorsContainer extends React.Component {

    componentDidMount() {

        this.props.getDoctors()
    }

    render() {
        return (
            <OurDoctors doctors={this.props.doctors}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.doctorReducer.isLoading,
        doctors: state.doctorReducer.doctors
    }
}

export default compose(connect(mapStateToProps,{getDoctors}))(OurDoctorsContainer)