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
import dayjs from "dayjs";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

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

        if (user_role === USER_ROLE.PATIENT) {
            deleteReceptionRecordByPatient(id, email)
        }
        if (user_role === USER_ROLE.DOCTOR) {
            deleteReceptionRecordByDoctor(id)
        }
        handleClose()
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
                                        {user_role === USER_ROLE.DOCTOR ?
                                            <caption>Записи на прийом</caption> :
                                            <caption>Мої записи на прийом</caption>
                                        }

                                        <TableHead>
                                            <TableRow>
                                                {
                                                    user_role === USER_ROLE.DOCTOR &&
                                                    <TableCell>Ім'я</TableCell>
                                                }
                                                {user_role === USER_ROLE.DOCTOR &&
                                                <TableCell align="right">Електронна адреса</TableCell>}
                                                {user_role === USER_ROLE.DOCTOR &&
                                                <TableCell align="right">Номер телефону</TableCell>}
                                                {
                                                    user_role === USER_ROLE.DOCTOR ?
                                                        <TableCell align="right">Послуга</TableCell> :
                                                        <TableCell>Послуга</TableCell>
                                                }
                                                <TableCell align="right">Ціна</TableCell>
                                                <TableCell align="right">Час та дата</TableCell>
                                                <TableCell align="right">Видалити запис</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {receptions.map(row =>

                                                <TableRow>

                                                    {user_role === USER_ROLE.DOCTOR &&
                                                    <TableCell className={style.field} component="th"
                                                               scope="row">{row.name}</TableCell>}
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
                                                    <TableCell

                                                        align="right">{row.MedicalService.price}</TableCell>
                                                    <TableCell contentEditable align="right">
                                                        {dayjs(row.date).format('HH:mm MM/DD/YYYY')}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <div title={'Видалити'} onClick={handleClickOpen}>
                                                            <DeleteForeverIcon
                                                                className={style.changeRecord}/>
                                                        </div>
                                                    </TableCell>
                                                    <div>

                                                        <Dialog
                                                            open={open}
                                                            onClose={handleClose}
                                                            aria-labelledby="alert-dialog-title"
                                                            aria-describedby="alert-dialog-description"
                                                        >
                                                            <DialogTitle
                                                                id="alert-dialog-title">{deleteReceptionRecordConfirm.deleteReceptionRecordTitle}</DialogTitle>
                                                            <DialogContent>
                                                                <DialogContentText id="alert-dialog-description">
                                                                    {deleteReceptionRecordConfirm.deleteReceptionRecordText}
                                                                </DialogContentText>
                                                            </DialogContent>
                                                            <DialogActions>
                                                                <Button onClick={handleClose} color="primary">
                                                                    Відхилити
                                                                </Button>
                                                                <Button
                                                                    onClick={() => onDeleteRecord(row.id, row.email)}
                                                                    color="primary"
                                                                    autoFocus>
                                                                    Прийняти
                                                                </Button>
                                                            </DialogActions>
                                                        </Dialog>
                                                    </div>
                                                </TableRow>)

                                            }
                                        </TableBody>
                                    </Table>

                                </TableContainer>

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