import React, {useEffect, useState} from "react";
import defaultAvatar from '../../../../../assets/img/default avatar.jpg';
import style from './CommentCard.module.css'

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
        onCommentDelete,
        doctorId,
        editChosenComment,
        isAuth
    }
) => {

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
        editChosenComment(commentId, doctorId, comment);
        setEditMode(!editMode)
    };

    return (
        <div>
            <div className={style.commentatorInfo}>
                {avatar === null ? <div><img src={defaultAvatar} width={'40px'} height={'40px'} alt=""/></div> :
                    <div><img src={avatar} alt=""/></div>}
                <div><span>{name}</span> <span>{surname}</span></div>
            </div>

            {
                !editMode ?
                    <div>{commentText}</div> :
                    <div>
                        <div>
                            <input
                                onChange={onChangeComment}
                                autoFocus
                                value={comment}
                            />
                        </div>
                        <div>
                            <button onClick={turnEditMode}>відхилити</button>
                            <button onClick={updateComment}>прийняти</button>
                        </div>
                    </div>
            }
            <br/>
            {
                isOwner && isAuth && <div>
                    <button className={style.edit} onClick={turnEditMode}>Редагувати</button>
                    {' '}
                    <button className={style.delete} onClick={() => {
                        onCommentDelete(commentId, doctorId)
                    }}>Видалити
                    </button>
                </div>
            }
            <div>{commentTime}</div>
            <br/><br/>
        </div>
    )
};

export default CommentCard