import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export const UserBox = (users,method) => {
    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={users}
                getOptionLabel={(option) => option.name+' '+ option.surname}
                style={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Виберіть користувача" variant="outlined"/>}

            />
            <button onClick={method} >Заблокувати користувача</button>

        </div>
    );
};

