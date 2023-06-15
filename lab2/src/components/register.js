import "./register.css";
import { Component } from "react";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      age: "",
      name: "",
    };
  }
  getName = (e) => {
    this.setState({ name: e.target.value });
    // this.props.onKeyChange(e.target.value);
  };
  getAge = (e) => {
    this.setState({ age: e.target.value });
    // this.props.onKeyChange(e.target.value);
  };

  handleAdd = () => {
    const { name, age } = this.state;
    this.props.onAddUser({ name, age });
  };
  render() {
    return (
      <div className="form-container">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="form-input"
          onChange={this.getName}
        />
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          name="age"
          className="form-input"
          onChange={this.getAge}
        />
        <button className="btn" type="submit" onClick={this.handleAdd}>
          ADD
        </button>
      </div>
    );
  }
}
export default Register;