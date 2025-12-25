import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"dummy",
      },
    };
    
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sudha2023-mygithub");
    const json = await data.json();

    this.setState({
      userInfo: json,
    })

  };

  componentDidUpdate(){
    console.log("Component Did Update");
  };

  componentWillUnmount(){
    console.log("Component will unmount");
  };

  render() {
    const {name, location,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>location : {location}</h2>
        <h4>Contact : 9390402885</h4>

      </div>
    );
  }
}

export default UserClass;