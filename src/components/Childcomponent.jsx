import React from "react";

class Childcomponent extends React.Component {
    // render() {
    //     return (
    //         <>
    //             <h1>
    //                 {/* I just get from parent value:{this.props.myProp} */}
    //                 call function Sum: 6+7={this.props.sum(6,7)}
    //                 {/* gọi hàm sum từ component cha */}
    //             </h1>
    //         </>
    //     );
    // };
    constructor(pros) {
        super(pros);
        this.state = {
            valueInput: ''
        }
    }

    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            valueInput: event.target.value
        })
    }

    handleOnchangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault(); //Ngăn lại việc tải lại trang
        console.log(this.state)
    }

    render() {
        let {valueInput}=this.state;
        return (
        <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
            <div>
                <input type="text" 
                    value={this.state.Name} // Gán giá trị mặc định
                    onChange={(event) => {this.handleOnchangeInput(event)}}/>
                <div>
                    {/* <span>{valueInput}</span> */}
                    <button type="submit" style={{backgroundColor: "green", margin: "20px"}}>Submit</button>
                </div>
            </div>
        </form>);
    };
}

export default Childcomponent;