import {connect} from "react-redux";
import {logout} from "../../redux/reducers/authReducer/thunks";
import Header from "../../components/basic/Header/Header";

const mapStateToProps = state => {

    return {
        isAuth: state.authReducer.isAuth,
        me: state.authReducer.me
    }
};
export default connect(mapStateToProps, {logout})(Header)