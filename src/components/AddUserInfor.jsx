import React from "react";
import Childcomponent from "./Childcomponent";

class AddUserInfor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Age: ""
        }
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); // ngăn việc tải lại trang
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    {/* Your form elements here */}
                    <input
                        type="text"
                        value={this.state.Name}
                        onChange={(e) => this.setState({ Name: e.target.value })}
                        placeholder="Enter name"
                    /> <br />
                    <input
                        type="number"
                        value={this.state.Age}
                        onChange={(e) => this.setState({ Age: e.target.value })}
                        placeholder="Enter age"
                    /> <br />
                    <button type="submit" style={{marginTop: "20px", backgroundColor: "green", color: "white"}}>Add User</button>
                </form>
            </div>
        );
    }
}



export default AddUserInfor;