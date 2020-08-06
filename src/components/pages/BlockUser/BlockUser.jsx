import React, {useEffect} from "react";
import style from './BlockUser.module.css'
import {FixedSizeList} from 'react-window';

import Preloader from "../../basic/Preloader/Preloader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const BlockUser = ({isCreateByAdmin, activeUsers, getActiveUsersFromDB, blockUserByAdmin}) => {

    useEffect(() => {
        if (!activeUsers.length) {
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
    const renderRow = (users) => {
        users = activeUsers;
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <ListItem style={style} key={user.id}>
                                <ListItemText primary={`${user.name + ' ' + user.surname}`}/>
                                <button className={style.blockBtn} onClick={() => onBlockUser(user.id)}>Заблокувати
                                </button>
                            </ListItem>
                        )
                    })
                }
            </div>
        );
    };
    return <div className={style.blockContainer}>

        <div className={style.blockUserInfo}>
            <div className={style.blockTitle}>Заблокувати користувача:</div>
            <input className={style.search} type="search" onChange={onSearchUsers} placeholder={"Пошук..."}/>
            <FixedSizeList height={230} width={280} itemSize={46} itemCount={1}>
                {renderRow}
            </FixedSizeList>
        </div>

    </div>

};

export default BlockUser;