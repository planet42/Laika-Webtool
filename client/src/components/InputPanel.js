import React, { Component } from 'react';
import TitleBar from './TitleBar'
import ButtonGroup from './ButtonGroup'

class InputPanel extends Component {

  state = {
    selectedFormat: "md"
  }

  formats = [
    { value: "md", display: "Markdown" }, 
    { value: "rst", display: "reStructuredText" }
  ]

  handleFormatChange = value => { this.setState({ selectedFormat: value }) }

  render() {
    return (
      <div>
        
        <TitleBar title="Input" />
        
        <div className="input">
          <ButtonGroup items={this.formats} value={this.state.selectedFormat} onChange={this.handleFormatChange}/>
          <textarea defaultValue={""} />
          <div className="counter"><span>[[input_length]] characters</span> ([[maxChars]] max)</div>
        </div>
        
      </div>  
    );
  }
}

export default InputPanel;
