import React, {useEffect, useState} from "react";
import defaultAvatar from '../../../assets/img/default avatar.jpg';
import style from './CommentCard.module.css'
import dayjs from "dayjs";
import {configs} from "../../../config/configs";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EditIcon from '@material-ui/icons/Edit';

const CommentCard = (
    {
        commentId,
        commentText,
        commentTime,
        commentator: {
            name,
            surname,
            avatar
        },
        isOwner,
        doctorId,
        editChosenComment,
        isAuth,
        isDoctor,
        commentsCountOnPage,
        currentPage,
        deleteChosenComment
    }
) => {

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const onCommentDelete = () => {
        deleteChosenComment(commentId, doctorId, commentsCountOnPage, currentPage)
    };

    const [editMode, setEditMode] = useState(false);
    const [comment, setComment] = useState(commentText);

    useEffect(() => {
        setComment(commentText);
    }, [commentText]);

    const turnEditMode = () => {
        setEditMode(!editMode)
    };

    const onChangeComment = e => {
        setComment(e.target.value)
    };

    const updateComment = () => {
        editChosenComment(commentId, doctorId, comment, commentsCountOnPage, currentPage);
        setEditMode(!editMode)
    };

    return (
        <div className={style.commentCardContainer}>
            <div className={style.commentatorInfo}>
                {
                    !avatar ? <img src={defaultAvatar} className={style.avatar} alt="avatar"/> :
                        <img className={style.avatar} src={`${configs.HOST}:${configs.PORT}/${avatar}`} alt="avatar"/>
                }
                <div className={style.commentatorName}>{name} {surname}</div>

            </div>

            <div className={style.commentInformation}>
                <div className={style.commentCommon}/>

                {

                    !editMode ?
                        <div className={style.commentText}>{commentText}</div> :
                        <div className={style.editAreaContainer}>
                            <div className={style.editAreaText}>
                                <textarea
                                    className={style.editArea}
                                    onChange={onChangeComment}
                                    autoFocus
                                    value={comment}
                                />
                            </div>

                            <div className={style.editBtnContainer}>
                                <button className={style.editCancel} onClick={turnEditMode}>ВІДХИЛИТИ</button>
                                <button className={style.editConfirm} onClick={updateComment}>ПРИЙНЯТИ</button>
                            </div>
                        </div>
                }
                <br/>
               <div className={style.changeText}>
                   {
                       isOwner && isAuth && <div>
                           <Button
                               variant="contained"
                               color="primary"
                               className={classes.button}
                               startIcon={<EditIcon/>}
                               onClick={turnEditMode}

                           >
                               Редагувати
                           </Button>


                       </div>
                   }
                   {(isDoctor || isOwner) && isAuth && <div>
                       <Button
                           variant="contained"
                           color="secondary"
                           className={classes.button}
                           startIcon={<DeleteIcon/>}
                           onClick={onCommentDelete}
                       >
                           Видалити
                       </Button>
                   </div>}

               </div>
                <div className={style.commentDate}>{dayjs(commentTime).format('HH:mm DD/MM/YYYY')}</div>
                <br/><br/>
            </div>
        </div>


    )
};

export default CommentCard