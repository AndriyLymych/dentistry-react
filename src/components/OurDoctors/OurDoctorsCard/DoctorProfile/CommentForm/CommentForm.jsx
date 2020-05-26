import React from 'react'
import {Field} from 'redux-form'

const CommentForm = props => {

    const {handleSubmit, pristine, reset, submitting,isAuth} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>

                    {
                        isAuth?
                            <div>
                                <label>Напишіть відгук</label>

                                <Field

                                    name="commentText"
                                    component="textarea"
                                    placeholder="Введіть ваше повыдомлення..."
                                    autoFocus={true}
                                />
                                <div>
                                    <button type="submit" disabled={pristine || submitting}>
                                        Надіслати
                                    </button>
                                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                                        Очистити текст
                                    </button>
                                </div>
                            </div>
                           :
                            <div>
                                <div color={'red'}>Залишати коментары можуть лиш авторизованы користувачы</div>
                                <Field
                                    component="textarea"
                                    disabled
                                />
                            </div>

                    }
                </div>


        </form>
    )
};

export default CommentForm