import React from "react";
import {connect} from "react-redux";
import {blockUserByAdmin, getActiveUsersFromDB} from "../../redux/reducers/adminReducer";
import {getActiveUsers, getIsCreateByAdmin} from "../../redux/selectors/adminSelectors";
import style from './BlockUserContainer.module.css'

import Preloader from "../Preloader/Preloader";


class BlockUserContainer extends React.Component {

    componentDidMount() {
        this.props.getActiveUsersFromDB();

    }


    onSearchUsers = (e) => {

        this.props.getActiveUsersFromDB(e.target.value);
    };

    onBlockUser = (id) => {
        this.props.blockUserByAdmin(id);

    };

    render() {

        if (this.props.isCreateByAdmin) {
            return <Preloader/>
        }

        return <div>

            <input type="search" onChange={this.onSearchUsers}/>
            <div>{this.props.activeUsers.map(user => {
                return <div className={style.userInfo}>
                    <div>{user.name + ' ' + user.surname}</div>
                    <button onClick={() => this.onBlockUser(user.id)}>Заблокувати</button>
                </div>
            })}</div>
        </div>
    }

}

const mapStateToProps = state => {
    return {
        isCreateByAdmin: getIsCreateByAdmin(state),
        activeUsers: getActiveUsers(state)
    }
};

export default connect(mapStateToProps, {getActiveUsersFromDB, blockUserByAdmin})(BlockUserContainer)