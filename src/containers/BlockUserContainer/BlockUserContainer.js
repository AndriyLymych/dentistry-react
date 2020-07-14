import {connect} from "react-redux";
import {blockUserByAdmin, getActiveUsersFromDB} from "../../redux/reducers/adminReducer/thunks";
import BlockUser from "../../components/pages/BlockUser/BlockUser";


const mapStateToProps = state => {
    return {
        isCreateByAdmin: state.adminReducer.isCreateByAdmin,
        activeUsers: state.adminReducer.activeUsers
    }
};

export default connect(mapStateToProps, {getActiveUsersFromDB, blockUserByAdmin})(BlockUser)