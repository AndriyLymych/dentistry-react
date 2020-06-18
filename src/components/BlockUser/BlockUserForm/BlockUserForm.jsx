import React from 'react'
import {Field} from 'redux-form'
import {UserBox} from "../../UserBox/UserBox";

const BlockUserForm = props => {

    const {handleSubmit, activeUsers} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>


                <div>
                    <label>Вибрати користувача:</label>
                    <Field
                        name="id"
                        component={()=>UserBox(activeUsers,handleSubmit)}
                    />
                </div>

            </div>

        </form>
    )
};

export default BlockUserForm