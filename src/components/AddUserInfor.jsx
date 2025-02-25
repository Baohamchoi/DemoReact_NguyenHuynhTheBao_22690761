import React from "react";
import { useState } from 'react'

const AddUserInfor = (props) => {

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Address, setAddress] = useState('IUH');

    const handleOnchangeInput = (event) => {
        setName(event.target.value)
}
    const handleOnchangeAge = (event) => {
        setAge(event.target.value)
}
    const handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang

        if (Name == "" || Age == "") {
            alert("Vui lòng nhập đủ thông tin"); // hiển thị thông báo lỗi
            return;
        }

        props.handleAddnewUser({
        id: Math.floor((Math.random() * 100) + 1) + "user",
        Name: Name,
        Age: Age
    })
 }

 return (
    <form action="" onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="">Your name:</label>
        <input type="text" value={Name}
        onChange={(event) => handleOnchangeInput(event)} />
        <br />
        <label htmlFor="">Your Age:</label>
        <input type="number"
        onChange={(event) => handleOnchangeAge(event)}
        value={Age} />
        <br/>
        <button style={{backgroundColor: "green", color: "white", marginTop: "20px"}}>Submit</button>
    </form>);
}



export default AddUserInfor;