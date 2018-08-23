import React, { Component } from 'react';
import TitleBar from './TitleBar.js'

class TextPanel extends Component {
  render() {
    return (
      <div className={this.props.bottom ? "bottom-panel" : undefined}>
        
        <TitleBar title={this.props.title} />
        
        <div>
          <pre>{this.props.content}</pre>
        </div>
        
      </div>  
    );
  }
}

export default TextPanel;
