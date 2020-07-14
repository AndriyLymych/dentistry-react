import {compose} from "redux";
import {connect} from "react-redux";
import {getDoctors} from "../../redux/reducers/doctorReducer/thunks";
import OurDoctors from "../../components/pages/OurDoctors/OurDoctors";

const mapStateToProps = state => {
    return {
        isLoading: state.doctorReducer.isLoading,
        doctors: state.doctorReducer.doctors
    }
};

export default compose(connect(mapStateToProps, {getDoctors}))(OurDoctors)