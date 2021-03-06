import react, { Component } from "react";
import "./sign.css";
import Signup from './Signup';
import SignIn from './SignIn';

class Sign extends Component {
  constructor() {
    super();
    this.state = {
      signInUpValue: 0,
    };
  }
  signUp = () => {
    this.setState({ signInUpValue: 1 });
  };
  signIn = () => {
    this.setState({ signInUpValue: 2 });
  };
  back = () => {
    this.setState({ signInUpValue: 0 });
  };
  render() {
    if (this.state.signInUpValue == 0) {
      return (
        <>
          <div className="row">
            <div className="col" style={{ background: "palevioletred", borderTopLeftRadius: '25px' }}>
              <button className="sbutton btn" onClick={this.signUp}>
                Sign Up
              </button>
            </div>
            <div className="col onedge">
              <button className="sbutton btn" onClick={this.signIn}>
                Sign In
              </button>
            </div>
          </div>
        </>
      );
    } else if (this.state.signInUpValue == 1) {
      return (
        <Signup back={this.back} logedIn={this.props.logedIn}/>
      );
    } else {
      return (
        <SignIn back={this.back} logedIn={this.props.logedIn}/>
      );
    }
  }
}
export default Sign;
