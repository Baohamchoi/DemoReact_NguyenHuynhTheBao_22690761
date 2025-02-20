import React, { use, useEffect } from "react";
import { useState } from 'react'

const DisplayInfor = (props) => {
    const { listUser } = props; //trong function component không dùng this
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state{
//     isShowHideListUser:true//gán giá trị cho biến
    // }

    useEffect(() => {
        setTimeout(() => {
            document.title = "Hello React Hook";   
        }, 3000)
        console.log("call useEffect");
    }, []);

     const handleShowHideListUser = () => {
     setShowHideListUser(!isShowHideListUser);
    }
    
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red": "blue"}> {/* mỗi phần tử trên trang hải là duy nhất */}
                            <div>User name is: {user.Name}</div>
                            <div>User Age: {user.Age}</div>
                            <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
                <span onClick={() => handleShowHideListUser()}>
                     {isShowHideListUser === true? "Hide list User":"Show list User"}
                </span>
            </div>
        );
} 
export default DisplayInfor;