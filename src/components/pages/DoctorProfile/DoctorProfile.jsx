import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import CommentCard from "../../basic/CommentCard/CommentCard";
import style from './DoctoreProfile.module.css'
import {reduxForm,} from "redux-form";
import CommentForm from "../../basic/CommentForm/CommentForm";
import {configs} from "../../../config/configs";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Rating from "material-ui-rating/lib";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";

const CommentReduxForm = reduxForm({
    form: 'comment'
})(CommentForm);

const DoctorProfile = (
    {
        isLoading,
        doctorProfile,
        doctorProfile: {
            id: doctorId,
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
        sendComment,
        isAuth,
        myID,
        deleteChosenComment,
        editChosenComment,
        isMarkLoading,
        isEvaluated,
        doctorMark,
        setDoctorMark,
        commentsCountOnPage,
        me,
        match,
        getDoctorProfile,
        getCommentsFromDB,
        getIsEvaluatedDoctor,
        getAverageDoctorMark
    }) => {

    useEffect(() => {
        const id = match.params.id;
        console.log(doctorMark);
        if (!doctorProfile.length) {
            getDoctorProfile(id);
        }

        if (!commentInfo.length) {
            getCommentsFromDB(id, commentsCountOnPage, currentPage);

        }
        getAverageDoctorMark(id);

        const token = checkAccessTokenPresent();

        if (token) {
            getIsEvaluatedDoctor(id)
        }

    }, []);

    const onSendComment = data => {
        sendComment(data, doctorId, commentsCountOnPage)
    };

    const onChangePage = page => {
        const id = match.params.id;

        getCommentsFromDB(id, commentsCountOnPage, page)

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
                                                        isDoctor={myID === comment.doctor_id}
                                                        me={me}
                                                        deleteChosenComment={deleteChosenComment}
                                                        doctorId={doctorId}
                                                        editChosenComment={editChosenComment}
                                                        isAuth={isAuth}
                                                        commentsCountOnPage={commentsCountOnPage}
                                                        currentPage={currentPage}
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