import React, {useState} from "react";

const MyProfileInfo = ({
                           me: {
                               name,
                               middleName,
                               surname,
                               age,
                               city,
                           }
                       }) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <p>{name}</p>
            <p>{middleName}</p>
            <p>{surname}</p>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    )
};

export default MyProfileInfo;