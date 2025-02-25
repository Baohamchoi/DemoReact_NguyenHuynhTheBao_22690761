import React from "react";
import Childcomponent from "./Childcomponent"
import DisplayInfor from "./DisplayInfor"
import AddUserInfor from "./AddUserInfor"
import { useState } from 'react'

const Mycomponent = (props) => {

    const [listUser, setlistUser] = useState(
        [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 17 },
            { id: 3, Name: "Chien", Age: 32 },
        ]
    )

const handleAddnewUser = (userObject) => {
     setlistUser([userObject, ...listUser]);
    }
    
    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id!== userID)
        setlistUser(listUserClone);
    }

    const handleDeleteAllUser = () => {
        setlistUser([]);
    }

    return (
        <div>
            {/* <Childcomponent myProp={parent} sum={this.sum}></Childcomponent> */}
            <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>
            <hr />
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser}></DisplayInfor>
            <button onClick={handleDeleteAllUser} style={{backgroundColor: "red", color: "white"}}>Delete all</button>
        </div>
    );
}
export default Mycomponent;
