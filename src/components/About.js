import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props);
  
  }

  componentDidMount() {
    
  };

  render() {
    
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name = {"sudharshan"} location={"Hindupur"} />
      </div>
    );
  }
}
export default About;