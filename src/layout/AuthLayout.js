import React, { Component } from "react";

 class AuthLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-red-600">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
export default AuthLayout;