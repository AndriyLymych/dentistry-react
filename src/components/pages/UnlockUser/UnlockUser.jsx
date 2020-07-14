import React, {useEffect} from "react";
import style from '../BlockUser/BlockUser.module.css'
import Preloader from "../../basic/Preloader/Preloader";

const UnlockUser = ({isCreateByAdmin, blockedUsers, getBlockedUsersFromDB, unlockUserByAdmin}) => {

    useEffect(() => {
        getBlockedUsersFromDB()
    }, [blockedUsers]);

    const onSearchUsers = (e) => {
        getBlockedUsersFromDB(e.target.value);
    };

    const onUnlockUser = (id) => {
        unlockUserByAdmin(id);
    };

    if (isCreateByAdmin) {
        return <Preloader/>
    }

    return <div>

        <input type="search" onChange={onSearchUsers}/>

        <div>{this.props.blockedUsers.map(u => {
            return <div className={style.userInfo}>
                <div>{u.name + ' ' + u.surname}</div>
                <button onClick={() => onUnlockUser(u.id)}>Розблокувати</button>
            </div>
        })}</div>
    </div>


}

export default UnlockUser;