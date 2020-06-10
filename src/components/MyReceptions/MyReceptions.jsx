import React, {useState} from "react";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import style from './MyReceptions.module.css'


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import EditIcon from '@material-ui/icons/Edit';
import {USER_ROLE} from "../../constant/userConstant/userRole";

import {deleteReceptionRecordConfirm} from "../../constant/confirmText/comfirmText";
import {ConfirmWindow} from "../Confirm/Confirm";

const MyReceptions = (
    {
        isLoading,
        receptions,
        isAuth,
        me: {
            UserRole: {
                label: user_role
            }
        },
        deleteReceptionRecordByPatient,
        deleteReceptionRecordByDoctor
    }
) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onDeleteRecord = (id, email) => {
        user_role === USER_ROLE.DOCTOR ?
            deleteReceptionRecordByDoctor(id, email) :
            deleteReceptionRecordByPatient(id)
    };

    return (

        <div>
            {isLoading && isAuth ? <Preloader/> :
                <div>

                    {
                        receptions.length > 0 ?
                            <div>
                                <TableContainer component={Paper}>
                                    <Table aria-label="caption table">
                                        <caption>Мої записи на прийом</caption>

                                        <TableHead>
                                            <TableRow>
                                                {user_role === USER_ROLE.DOCTOR && <TableCell>Ім'я</TableCell>}
                                                {user_role === USER_ROLE.DOCTOR &&
                                                <TableCell align="right">Електронна адреса</TableCell>}
                                                {user_role === USER_ROLE.DOCTOR &&
                                                <TableCell align="right">Номер телефону</TableCell>}

                                                <TableCell>Послуга</TableCell>
                                                <TableCell align="right">Ціна</TableCell>
                                                <TableCell align="right">Час</TableCell>
                                                <TableCell align="right">Змінити запис</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {receptions.map(row => (

                                                <TableRow>
                                                    {user_role === USER_ROLE.DOCTOR &&
                                                    <TableCell component="th" scope="row">{row.name}</TableCell>}
                                                    {user_role === USER_ROLE.DOCTOR &&
                                                    <TableCell align="right">{row.email}</TableCell>}
                                                    {user_role === USER_ROLE.DOCTOR &&
                                                    <TableCell align="right">{row.phone_number}</TableCell>}
                                                    {user_role === USER_ROLE.DOCTOR ?
                                                        <TableCell align="right">
                                                            {row.MedicalService.service}
                                                        </TableCell> :
                                                        <TableCell component="th" scope="row">
                                                            {row.MedicalService.service}
                                                        </TableCell>
                                                    }
                                                    <TableCell align="right">{row.MedicalService.price}</TableCell>
                                                    <TableCell align="right">{row.date}</TableCell>
                                                    <TableCell align="right">
                                                        <div title={'Видалити'} onClick={handleClickOpen}>
                                                            <DeleteForeverIcon className={style.changeRecord}/>
                                                        </div>
                                                        {user_role === USER_ROLE.DOCTOR && <div title={'Редагувати'}>
                                                            <EditIcon title={'edit'} className={style.changeRecord}/>
                                                        </div>}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                {ConfirmWindow(
                                    open,
                                    handleClose,
                                    deleteReceptionRecordConfirm.deleteReceptionRecordTitle,
                                    deleteReceptionRecordConfirm.deleteReceptionRecordText,
                                    onDeleteRecord()
                                )}
                            </div>
                            :
                            <div>
                                <div>У вас немає активних записів.Запишіться на прийом</div>
                                <NavLink to={'/reception-service'}>
                                    <button>Записатися на прийом</button>
                                </NavLink>
                            </div>
                    }

                </div>

            }
        </div>
    )
};

export default MyReceptions;