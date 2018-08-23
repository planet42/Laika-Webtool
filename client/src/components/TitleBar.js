import React, { Component } from 'react';

class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="title">{this.props.title}</div>
        <div className="collapse-button">
          <a><i className="icon"></i></a>
        </div>
      </div>
    );
  }
}

export default TitleBar;
