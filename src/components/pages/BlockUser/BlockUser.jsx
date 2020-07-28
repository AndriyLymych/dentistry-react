import React, {useEffect} from "react";
import style from './BlockUser.module.css'

import Preloader from "../../basic/Preloader/Preloader";


const BlockUser = ({isCreateByAdmin, activeUsers, getActiveUsersFromDB, blockUserByAdmin}) => {

    useEffect(() => {
       if (!activeUsers.length){
           getActiveUsersFromDB()
       }
    }, [activeUsers]);


    const onSearchUsers = (e) => {

        getActiveUsersFromDB(e.target.value);
    };

    const onBlockUser = (id) => {
        blockUserByAdmin(id);

    };

    if (isCreateByAdmin) {
        return <Preloader/>
    }

    return <div>

        <input type="search" onChange={onSearchUsers}/>

        <div>{activeUsers.map(user => {
            return <div className={style.userInfo}>
                <div>{user.name + ' ' + user.surname}</div>
                <button onClick={() => onBlockUser(user.id)}>Заблокувати</button>
            </div>
        })}</div>
    </div>

};

export default BlockUser;