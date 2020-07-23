import React from 'react'
import {Field} from 'redux-form'
import style from './CommentForm.module.css';

const CommentForm = props => {

    const {handleSubmit, pristine, submitting, isAuth} = props;

    return (
        <form  className={style.commentForm} onSubmit={handleSubmit}>

                {
                    isAuth ?
                        <div className={style.formInfo}>
                                <div className={style.commentTitle}>ВІДГУК:</div>

                            <Field
                                name="commentText"
                                component="textarea"
                                placeholder="Введіть ваше повідомлення..."
                                autoFocus={true}
                            />

                        </div>
                        :
                        <div className={style.formInfo}>
                            <Field
                                component="textarea"
                                disabled
                            />
                            <div className={style.noAuth}>Залишати відгуки можуть лише авторизовані користувачі</div>

                        </div>

                }

                <div>
                    {isAuth &&
                        <div>
                            <button className={style.commentBtn} type="submit" disabled={pristine || submitting}>
                                Надіслати
                            </button>
                        </div>
                    }
                </div>


        </form>
    )
};

export default CommentForm