import React, { Component } from 'react';
import TitleBar from './TitleBar.js'

class InputPanel extends Component {
  render() {
    return (
      <div>
        
        <TitleBar title="Input" />
        
        <div className="input">
          <div className="btn-group">
            <button type="button" className="btn active">Markdown</button>
            <button type="button" className="btn">reStructuredText</button>
          </div>
          <textarea defaultValue={""} />
          <div className="counter"><span>[[input_length]] characters</span> ([[maxChars]] max)</div>
        </div>
        
      </div>  
    );
  }
}

export default InputPanel;
