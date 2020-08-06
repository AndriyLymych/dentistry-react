import React, {useEffect} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import s from '../BlockUser/BlockUser.module.css'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {FixedSizeList} from "react-window";

const UnlockUser = ({isCreateByAdmin, blockedUsers, getBlockedUsersFromDB, unlockUserByAdmin}) => {

    useEffect(() => {
        if (!blockedUsers.length) {
            getBlockedUsersFromDB()
        }
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

    const renderRow = (users) => {
        users = blockedUsers;
        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <ListItem key={user.id}>
                                <ListItemText primary={`${user.name + ' ' + user.surname}`}/>
                                <button className={s.blockBtn} onClick={() => onUnlockUser(user.id)}>Розблокувати
                                </button>
                            </ListItem>
                        )
                    })
                }
            </div>
        );
    };

    return <div className={s.blockContainer}>
        {
            blockedUsers.length > 0 ?
                <div className={s.blockUserInfo}>
                    <div className={s.blockTitle}>Розблокувати користувача:</div>
                    <input className={s.search} type="search" onChange={onSearchUsers} placeholder={"Пошук..."}/>
                    <FixedSizeList height={230} width={280} itemSize={46} itemCount={1}>
                        {renderRow}
                    </FixedSizeList>
                </div> :
                <div className={s.noBlockUser}>Немає заблокованих користувачів</div>
        }
    </div>


}

export default UnlockUser;