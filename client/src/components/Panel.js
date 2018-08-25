import React, { Component } from 'react';
import TitleBar from './TitleBar'

class Panel extends Component {
  render() {
    const panelClasses = this.props.bottom ? "bottom-panel" : undefined;
    const bodyClasses = `panel-body ${this.props.kind}`;
    return (
      <div className={panelClasses}>
        
        <TitleBar title={this.props.title} />
        
        <div className={bodyClasses}>
          {this.props.children}
        </div>
        
      </div>  
    );
  }
}

export default Panel;
