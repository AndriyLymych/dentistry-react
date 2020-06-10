import React, { useState} from "react";
import Preloader from "../../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import CommentCard from "./CommentCard/CommentCard";
import style from './DoctoreProfile.module.css'
import {reduxForm,} from "redux-form";
import CommentForm from "./CommentForm/CommentForm";
import {configs} from "../../../../config/configs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "material-ui-rating/lib";

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
        editChosenComment,
        isMarkLoading,
        isEvaluated,
        doctorMark,
        setDoctorMark


    }) => {

    const onSendComment = data => {
        sendComment(data, doctorId)
    };

    const onCommentDelete = (comment_id, doctor_id) => {
        deleteChosenComment(comment_id, doctor_id)
    };

    const [star, setStar] = useState(1);

    if (!isMarkLoading) {
        return <Preloader/>
    }
    const evaluateDoctor = star => {
        setDoctorMark(star, doctorId)
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
                            <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                                 alt="ava"/>
                        </div>
                        <h2>{name}</h2>
                        <h2>{middleName}</h2>
                        <h2>{surname}</h2>
                        <h3>{age}</h3>
                        <h4>{city}</h4>


                        <div>

                            {
                                !isEvaluated && isAuth && <div>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                        <Typography component="legend">Оцініть лікаря</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={star}
                                            onChange={(star) => {
                                                setStar(star);
                                                evaluateDoctor(star)
                                            }}
                                        />
                                    </Box>
                                </div>

                            }

                            {
                                (isEvaluated || !isAuth) && <div>
                                    <Typography component="legend">Середня оцінка</Typography>
                                    <Rating name="half-rating-read" value={doctorMark} precision={0.5} readOnly/>
                                </div>
                            }
                        </div>
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