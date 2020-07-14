import {compose} from "redux";
import {connect} from "react-redux";
import OurServices from "../../components/pages/OurServices/OurServices";
import {getServicesFromDB} from "../../redux/reducers/serviceReducer/thunks";


const mapStateToProps = state => {
    return {
        services: state.serviceReducer.services,
        isLoading: state.serviceReducer.isLoading
    }
};

export default compose(connect(mapStateToProps,{getServicesFromDB})(OurServices))