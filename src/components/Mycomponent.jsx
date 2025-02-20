import React from "react";
import Childcomponent from "./Childcomponent"
import DisplayInfor from "./DisplayInfor"
import AddUserInfor from "./AddUserInfor"

class Mycomponent extends React.Component {
    state = {
        listUser: [
            {id: 1, Name: "Dung", Age: 49 },
            {id: 2, Name: "Hoang", Age: 17 },
            {id: 3, Name: "Chien", Age: 32 },
        ]
    }

    handleAddnewUser = (userObject) => {
         this.setState({
         listUser: [userObject, ...this.state.listUser]
        })
    }

    // sum = (a,b) => {
    //     return a + b;
    // }

    render() {
        return (
            // <div>
            //     My name is: {this.state.Name}
            //     <br />
            //     Address: {this.state.Address}
            // </div>
            // <div>
            //     <Childcomponent myProp={parent} sum={this.sum}></Childcomponent>
            //     {/* truyền giá trị cho component con thông qua prop */}
            // </div>
            <div>
                <Childcomponent myProp={parent} sum={this.sum}></Childcomponent>
                <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor>
                <hr />
                <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
            </div>
        );
    }
}
export default Mycomponent;
