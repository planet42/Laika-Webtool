import React, { Component } from 'react';
import TitleBar from './TitleBar'
import ButtonGroup from './ButtonGroup'

class InputPanel extends Component {

  state = {
    selectedFormat: "md",
    markupInput: ""
  }

  formats = [
    { value: "md", display: "Markdown" }, 
    { value: "rst", display: "reStructuredText" }
  ]

  eventDelay = 1500
  maxInputChars = 500

  inputTooLong = input => input.length > this.maxInputChars

  fireEvent = (format, input) => { if (!this.inputTooLong(input)) this.props.onChange(format, input) }

  scheduleEvent = newInput => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.fireEvent(this.state.selectedFormat, newInput), this.eventDelay);
  }

  handleFormatChange = newFormat => {
    this.fireEvent(newFormat, this.state.markupInput);
    this.setState({ selectedFormat: newFormat }); 
  }

  handleInputChange = event => {
    const newInput = event.target.value;
    this.scheduleEvent(newInput);
    this.setState({ markupInput: newInput }); 
  }

  render() {
    const counterClass = this.inputTooLong(this.state.markupInput) ? "red" : undefined
    return (
      <div>
        
        <TitleBar title="Input" />
        
        <div className="input">
          <ButtonGroup items={this.formats} value={this.state.selectedFormat} onChange={this.handleFormatChange}/>
          <textarea defaultValue={""} onChange={this.handleInputChange}/>
          <div className="counter">
            <span className={counterClass}>{this.state.markupInput.length} characters</span> ({this.maxInputChars} max)
          </div>
        </div>
        
      </div>  
    );
  }
}

export default InputPanel;
