import React, { Component } from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import queryString from 'query-string';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userId: "",
      name: "",
      email: "",
      pic: ""
    };
  }
  componentClicked = () => {
    console.log("component clicked");
  };
  responseFacebook = response => {
    console.log();
    const values = queryString.parse(window.location.search)
  console.log(values.code);
    let name = response.name;
    let email = response.email;
    let pic= response.picture.data.url;
    this.setState({
      name: name,
      email: email,
      pic: pic
    })
  };
  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="Enter your app id"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return (
      <div>
      <div>
        <h1>Kunal</h1>
        {fbContent}
      </div>
      <div>
      <p>{this.state.name}</p>
      <p>{this.state.email}</p>
      <img src={this.state.pic} alt="picture"/>
      </div>
      </div>
    );
  }
}
export default Welcome;
