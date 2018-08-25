import React, { Component } from 'react';
import TitleBar from './TitleBar'

class Panel extends Component {
  
  state = {
    collapsed: false
  }
  
  handleCollapseToggle = () => { this.setState({ collapsed: !this.state.collapsed }) }

  render() {
    const bodyStyle = this.state.collapsed ?
      { height: '0px' } :
      { height: 'auto'};
    const bodyClasses = `panel-body ${this.props.kind}`;
    const panelClasses = this.props.bottom ? "bottom-panel" : undefined;
    return (
      <div className={panelClasses}>
        
        <TitleBar title={this.props.title} collapsed={this.state.collapsed} onToggleCollapse={this.handleCollapseToggle}/>
        
        <div style={bodyStyle} className='collapsible'>
          <div className={bodyClasses}>
            {this.props.children}
          </div>
        </div>

      </div>  
    );
  }
}

export default Panel;
