import React, { Component } from 'react';
import TitleBar from './TitleBar.js'
import '../css/output.css'; 

class HtmlPanel extends Component {
  render() {
    return (
      <div className="bottom-panel">
        
        <TitleBar title={this.props.title} />
        
        <div>
          <div className="output" dangerouslySetInnerHTML={{__html: this.props.content}} />
        </div>
        
      </div>  
    );
  }
}

export default HtmlPanel;
