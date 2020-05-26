import React from 'react'
import {Field} from 'redux-form'

const CommentForm = props => {

    const {handleSubmit, pristine, reset, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Напишіть відгук</label>
                <div>
                    <Field
                        name="commentText"
                        component="textarea"
                        placeholder="Введіть ваше повыдомлення..."
                    />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Надіслати
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Очистити текст
                </button>
            </div>
        </form>
    )
};

export default CommentForm