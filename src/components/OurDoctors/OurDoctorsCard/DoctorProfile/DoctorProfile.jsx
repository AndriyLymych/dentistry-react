import React from "react";
import Preloader from "../../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import CommentCard from "./CommentCard/CommentCard";
import style from './DoctoreProfile.module.css'
import {reduxForm,} from "redux-form";
import CommentForm from "./CommentForm/CommentForm";

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
            avatar
        },
        isLoadingComments,
        commentInfo,
        pageCount,
        currentPage,
        onChangePage,
        sendComment,
        doctorId,
        isAuth


    }) => {

    const onSendComment = data => {
        sendComment(data, doctorId)
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

                        <div>
                            <img src={avatar} alt="ava"/>


                        </div>
                        <p>{name}</p>
                        <p>{middleName}</p>
                        <p>{surname}</p>

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
                                                        commentText={comment.commentText}
                                                        commentTime={comment.created_at}
                                                        commentator={comment["Commentator"]}

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