import React from "react";
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
        doctorId
    }
) => {
    const commentData = new Date(commentTime);
    return (
        <div>
            <div className={style.commentatorInfo}>
                {avatar === null ? <div><img src={defaultAvatar} width={'40px'} height={'40px'} alt=""/></div> :
                    <div><img src={avatar} alt=""/></div>}
                <div><span>{name}</span> <span>{surname}</span></div>
            </div>
            <div>{commentText}</div>
            <br/>
            {
                isOwner && <div>
                    <span className={style.edit}>Редагувати</span>
                    {' '}
                    <span className={style.delete} onClick={()=>{onCommentDelete(commentId,doctorId)}}>Видалити</span>
                </div>
            }
            <div>{commentTime.toLocaleString()}</div>
            <br/><br/>
        </div>
    )
};

export default CommentCard