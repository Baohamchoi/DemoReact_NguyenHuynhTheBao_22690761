import React, { use, useEffect } from "react";
import { useState } from 'react'

const DisplayInfor = (props) => {
    const { listUser } = props; //trong function component không dùng this
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state{
//     isShowHideListUser:true//gán giá trị cho biến
    // }

    useEffect(() => {
        if (listUser.length === 0) {
            alert("Bạn đã xóa tất cả user");
        }

        if (listUser.length > 10) {
            alert("Danh sách user đã đầy");
        }
        console.log("call useeffect");
    }, [listUser]);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    
        return (
            <div>
                {isShowHideListUser && listUser.map((user) => {
                    return (
                        <div key={user.id} className={user.Age < 18 ? "red": "blue"}> {/* mỗi phần tử trên trang hải là duy nhất */}
                            <div>User name is: {user.Name}</div>
                            <div>User Age: {user.Age}</div>
                            <button onClick={() => props.handleDeleteUser(user.id)} style={{backgroundColor: "red", color: "white"}}>Delete</button>
                            <hr />
                        </div>
                    )
                })}
                <span onClick={() => handleShowHideListUser()}>
                     {isShowHideListUser === true ? "Hide list User":"Show list User"}
                </span>
            </div>
        );
} 
export default DisplayInfor;