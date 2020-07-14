import {connect} from "react-redux";
import {getBlockedUsersFromDB, unlockUserByAdmin} from "../../redux/reducers/adminReducer/thunks";
import UnlockUser from "../../components/pages/UnlockUser/UnlockUser";

const mapStateToProps = state => {
    return {
        isCreateByAdmin: state.adminReducer.isCreateByAdmin,
        blockedUsers: state.adminReducer.blockedUsers
    }
};

export default connect(mapStateToProps, {getBlockedUsersFromDB, unlockUserByAdmin})(UnlockUser)