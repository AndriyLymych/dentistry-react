import React from "react";
import Preloader from "../Preloader/Preloader";

const MyReceptions = ({isLoading,receptions,isAuth}) =>{
    return (
        <div>
            {isLoading && isAuth  ? <Preloader/>:
                <div>
                    <ul>

                        {/*<input id="datetime" type="datetime-local"/>*/}
                        <div>{receptions.map(item=><div>
                            <div>{item.phone_number}</div>
                            <div>{item.name}</div>
                        </div>)}</div>
                    </ul>
                </div>

            }
        </div>
    )
};

export default MyReceptions