import { Component } from "react";

class InputComponent extends Component {
  getData = (e) => {
    this.setState({ name: e.target.value });
  };

  resetForm = () => {
    this.setState({ name: "" });
  };

  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <form className="Container" action="post">
        <input
         type="text" 
         value={this.state.name} 
         onChange={this.getData} 
         />
        <h2>your input: {this.state.name}</h2>
        <input
         type="reset"
        onClick={this.resetForm} 
        />
      </form>
    );
  }
}

export default InputComponent;