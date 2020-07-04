import React from "react";
import {connect} from "react-redux";
import {getBlockedUsersFromDB, unlockUserByAdmin} from "../../redux/reducers/adminReducer";
import {getBlockedUsers, getIsCreateByAdmin} from "../../redux/selectors/adminSelectors";
import style from '../BlockUser/BlockUserContainer.module.css'
import Preloader from "../Preloader/Preloader";


class UnlockUserContainer extends React.Component {

    componentDidMount() {
        this.props.getBlockedUsersFromDB();

    }


    onSearchUsers = (e) => {
        console.log(e.target.value);
        this.props.getBlockedUsersFromDB(e.target.value);
    };

    onUnlockUser = (id) => {
        this.props.unlockUserByAdmin(id);
    };

    render() {

        if (this.props.isCreateByAdmin) {
            return <Preloader/>
        }

        return <div>

            <input type="search" onChange={this.onSearchUsers}/>

            <div>{this.props.blockedUsers.map(u => {
                return <div className={style.userInfo}>
                    <div>{u.name + ' ' + u.surname}</div>
                    <button onClick={() => this.onUnlockUser(u.id)}>Розблокувати</button>
                </div>
            })}</div>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        isCreateByAdmin: getIsCreateByAdmin(state),
        blockedUsers: getBlockedUsers(state)
    }
};

export default connect(mapStateToProps, {getBlockedUsersFromDB, unlockUserByAdmin})(UnlockUserContainer)