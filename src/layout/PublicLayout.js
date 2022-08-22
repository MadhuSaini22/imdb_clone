import React, { Component } from "react";

class PublicLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg-red">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
export default PublicLayout;
