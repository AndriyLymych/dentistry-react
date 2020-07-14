import {compose} from "redux";
import {connect} from "react-redux";
import {
    deleteReceptionRecordByDoctor,
    deleteReceptionRecordByPatient,
    getAllReception,
    getMyProfileReceptions
} from "../../redux/reducers/myReceptionReducer/thunks";
import MyReceptions from "../../components/pages/MyReceptions/MyReceptions";
import {withRouter} from "react-router-dom";

const mapStateToProps = state => {
    return {
        isLoading: state.myReceptionReducer.isLoading,
        receptions: state.myReceptionReducer.receptions,
        me: state.authReducer.me,
        isAuth: state.authReducer.isAuth

    }
};

const MyReceptionsWithRouter = withRouter(MyReceptions);

export default compose(connect(mapStateToProps, {
        getMyProfileReceptions,
        getAllReception,
        deleteReceptionRecordByPatient,
        deleteReceptionRecordByDoctor
    }
))(MyReceptionsWithRouter)