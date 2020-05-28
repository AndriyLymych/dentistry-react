import React from "react";
import Preloader from "../../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import CommentCard from "./CommentCard/CommentCard";
import style from './DoctoreProfile.module.css'
import {reduxForm,} from "redux-form";
import CommentForm from "./CommentForm/CommentForm";
import {configs} from "../../../../config/configs";

const CommentReduxForm = reduxForm({
    form: 'comment'
})(CommentForm);

const DoctorProfile = (
    {
        isLoading,
        doctorProfile: {
            name,
            middleName,
            surname,
            avatar,
            age,
            city
        },
        isLoadingComments,
        commentInfo,
        pageCount,
        currentPage,
        onChangePage,
        sendComment,
        doctorId,
        isAuth,
        myID,
        deleteChosenComment,
        editChosenComment


    }) => {

    const onSendComment = data => {
        sendComment(data, doctorId)
    };

    const onCommentDelete = (comment_id, doctor_id) => {
        deleteChosenComment(comment_id, doctor_id)
    };

    return (
        <div>
            {
                isLoading ? <Preloader/> :
                    <div>
                        <NavLink to={'/our-doctors'}>
                            <button>
                                назад
                            </button>
                        </NavLink>

                        <div >
                            <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`} alt="ava"/>
                        </div>
                        <h2>{name}</h2>
                        <h2>{middleName}</h2>
                        <h2>{surname}</h2>
                        <h3>{age}</h3>
                        <h4>{city}</h4>

                        <br/><br/><br/><br/>

                        {
                            isLoadingComments ?
                                <Preloader/> :
                                <div>
                                    <CommentReduxForm onSubmit={onSendComment} isAuth={isAuth}/>
                                    <div>

                                        <br/>
                                        {
                                            commentInfo.map(
                                                comment =>
                                                    <CommentCard
                                                        commentId={comment.id}
                                                        commentText={comment.commentText}
                                                        commentTime={comment.created_at}
                                                        commentator={comment["Commentator"]}
                                                        isOwner={myID === comment.user_id}
                                                        onCommentDelete={onCommentDelete}
                                                        doctorId={doctorId}
                                                        editChosenComment={editChosenComment}
                                                        isAuth={isAuth}
                                                    />
                                            )
                                        }
                                    </div>
                                    {currentPage > 1 ?
                                        <button onClick={() => {
                                            onChangePage(currentPage = currentPage - 1)
                                        }}>Показати попередні</button>
                                        : null
                                    }
                                    {
                                        commentInfo.length > 0 && currentPage !== pageCount ?
                                            <button onClick={() => {
                                                onChangePage(currentPage = currentPage + 1)
                                            }}>Показати ще</button>
                                            : null
                                    }


                                </div>


                        }

                    </div>
            }
        </div>
    )
};

export default DoctorProfile