import React, { Component } from 'react';

class ButtonGroup extends Component {
  render() {
    const buttons = this.props.items.map( item => {
      const classes = item.value == this.props.value ? "btn active" : "btn"  
      return (
        <button
          type="button"
          key={item.value}
          className={classes}
          onClick={e => this.props.onChange(item.value)}>
            {item.display}
        </button>
      ); 
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

export default ButtonGroup;
