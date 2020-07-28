import React, {useEffect, useState} from "react";
import Preloader from "../../basic/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import CommentCard from "../../basic/CommentCard/CommentCard";
import style from './DoctoreProfile.module.css'
import {reduxForm,} from "redux-form";
import CommentForm from "../../basic/CommentForm/CommentForm";
import {configs} from "../../../config/configs";
import Box from "@material-ui/core/Box";
import Rating from "material-ui-rating/lib";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import Footer from "../../basic/Footer/Footer";

const CommentReduxForm = reduxForm({
    form: 'comment'
})(CommentForm);
//TODO speciality err
const DoctorProfile = (
    {
        isLoading,
        doctorProfile,
        doctorProfile: {
            id: doctorId,
            email,
            name,
            middleName,
            surname,
            avatar,
            age,
            city,
            experience,
            room
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
        getAverageDoctorMark,

    }) => {

    useEffect(() => {
        const id = match.params.id;

            getDoctorProfile(id);



        getCommentsFromDB(id, commentsCountOnPage, currentPage);

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
            <div>
                {
                    isLoading ? <Preloader/> :
                        <div className={style.docProfileContainer}>
                            <NavLink className={style.backBtn} to={'/our-doctors'}>
                                назад
                            </NavLink>

                            <div className={style.docInfo}>
                                <img className={style.avatarBlock} src={`${configs.HOST}:${configs.PORT}/${avatar}`}
                                     alt="ava"/>
                                <div className={style.docInfoData}>
                                    <div className={style.mainInfo}>
                                        <div className={style.docInfoDataName}>
                                            <p className={style.name}>{name} </p>
                                            <p className={style.name}>{middleName}</p>
                                            <p className={style.name}>{surname}</p>
                                        </div>
                                        {/*<div className={style.restInfoData + ' ' + style.position}>{doctorProfile.UserSpeciality.label}</div>*/}
                                        <div className={style.restInfoContainer}>
                                            <div className={style.docInfoTitle}>Вік:</div>
                                            <div className={style.restInfoData}>{age} років</div>
                                        </div>
                                        <div className={style.restInfoContainer}>
                                            <div className={style.docInfoTitle}>Місто:</div>
                                            <div className={style.restInfoData}>{city}</div>
                                        </div>
                                        <div className={style.restInfoContainer}>
                                            <div className={style.docInfoTitle}>Електронна адреса:</div>
                                            <div className={style.restInfoData}>{email}</div>
                                        </div>

                                        {
                                            !isEvaluated && isAuth && <div >
                                                <Box component="fieldset" mb={3} borderColor="transparent">
                                                    <div className={style.ratingTitle}>Оцініть лікаря:</div>
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
                                                <div className={style.ratingTitle}>Середня
                                                    оцінка:
                                                </div>
                                                <Rating name="half-rating-read" value={doctorMark}
                                                        precision={0.5}
                                                        readOnly/>
                                            </div>
                                        }
                                    </div>
                                    <div className={style.docInfoLine}/>
                                    <div className={style.restInfo}>
                                        <div className={style.restInfoContainer}>
                                            <div className={style.restInfoTitle}>Графік:</div>
                                            <div className={style.restInfoData}>9:00 - 20:00</div>
                                        </div>
                                        <div className={style.restInfoContainer}>
                                            <div className={style.restInfoTitle}>Кабінет:</div>
                                            <div className={style.restInfoData}>{room}</div>
                                        </div>
                                        <div className={style.restInfoContainer}>
                                            <div className={style.restInfoTitle}>
                                                Стаж:
                                            </div>
                                            <div className={style.restInfoData}>
                                                {experience} років
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            {
                                isLoadingComments ?
                                    <Preloader/> :
                                    <div className={style.commentContainer}>
                                        <div className={style.commentArea}>
                                            <CommentReduxForm onSubmit={onSendComment} isAuth={isAuth}/>
                                        </div>

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
                                        {currentPage > 1 ?
                                            <button className={style.nextPage} onClick={() => {
                                                onChangePage(currentPage = currentPage - 1)
                                            }}>Попередня сторінка</button>
                                            : null
                                        }
                                        {
                                            commentInfo.length > 0 && currentPage !== pageCount ?
                                                <button className={style.nextPage} onClick={() => {
                                                    onChangePage(currentPage = currentPage + 1)
                                                }}>Наступна сторінка</button>
                                                : null
                                        }


                                    </div>


                            }

                        </div>
                }
            </div>
            <Footer/>
        </div>
    )
};

export default DoctorProfile