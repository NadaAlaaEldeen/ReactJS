import Register from "./register";
import Students from "./students";
import { Component } from "react";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  ReciveStudent = (user) => {
    this.setState(
      (prevState) => ({
        users: [...prevState.users, user],
      }),
      () => {
        console.log(this.state.users);
      }
    );
  };
  render() {
    return (
      <div>
        <Register onAddUser={this.ReciveStudent} />
        <Students students={this.state.users} />
      </div>
    );
  }
}
export default Home;