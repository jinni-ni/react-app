import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject render");
    return (
      <div>
        <header>
          <h1>
            <a href="/">{this.props.title}</a>
          </h1>
          {this.props.sub}
        </header>
      </div>
    );
  }
}

export default Subject;
