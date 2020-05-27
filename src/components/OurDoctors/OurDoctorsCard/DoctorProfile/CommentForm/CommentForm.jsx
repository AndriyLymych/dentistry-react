import React from 'react'
import {Field} from 'redux-form'
import style from './CommentForm.module.css';

const CommentForm = props => {

    const {handleSubmit, pristine, reset, submitting,isAuth} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>

                    {
                        isAuth?
                            <div>
                            <div>
                                <label>Напишіть відгук</label>
                            </div>

                                <Field

                                    name="commentText"
                                    component="textarea"
                                    placeholder="Введіть ваше повыдомлення..."
                                    autoFocus={true}
                                />

                            </div>
                           :
                            <div>
                                <div className={style.noAuth}>Залишати коментары можуть лиш авторизованы користувачы</div>
                                <Field
                                    component="textarea"
                                    disabled
                                />
                            </div>

                    }

                <div>
                    {isAuth ?
                        <div>
                            <button type="submit" disabled={pristine || submitting}>
                                Надіслати
                            </button>
                            <button type="button" disabled={pristine || submitting} onClick={reset}>
                                Очистити текст
                            </button>
                        </div>:
                        <button type="submit" disabled>
                            Надіслати
                        </button>
                    }
                </div>
                </div>


        </form>
    )
};

export default CommentForm