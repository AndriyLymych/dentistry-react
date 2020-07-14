import {connect} from "react-redux";
import {getServicesFromDB} from "../../redux/reducers/serviceReducer/thunks";
import {receptionPatient} from "../../redux/reducers/receptionReducer/thunks";
import Reception from "../../components/pages/Reception/Reception";

const mapStateToProps = state => {
    return {
        services: state.serviceReducer.services,
        isReceptionSuccess: state.receptionReducer.isRegisterSuccess,
        isAuth: state.authReducer.isAuth,
        isReceptionLoading: state.receptionReducer.isReceptionLoading
    }
};


export default connect(mapStateToProps, {getServicesFromDB, receptionPatient})(Reception)