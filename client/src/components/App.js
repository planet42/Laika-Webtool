import React, { Component } from 'react';
import TitleBar from './TitleBar.js'
import DocPanel from './DocPanel.js'
import InputPanel from './InputPanel.js'
import TextPanel from './TextPanel.js'
import HtmlPanel from './HtmlPanel.js';
import '../css/main.css'; 
import logo from '../images/laika-top.png'


class App extends Component {
  render() {
    return (
      <div className="row">
 
        <div className="left">

          <img src={logo}/>
          <h2>Transformer Webtool</h2>

          <InputPanel />
          <DocPanel />

        </div>
        
        <div className="middle-right">
      
          <div className="middle">
    
            <TextPanel title="Raw Document Tree Model" content="[[lastResult.rawTree]]" />

            <TextPanel title="Rewritten Document Tree Model" content="[[lastResult.rewrittenTree]]" bottom />
          
          </div>
          
          <div className="right">
        
            <TextPanel title="HTML Source" content="[[lastResult.html]]" />
            
            <HtmlPanel title="Rendered HTML" content="foo <b>bar</b> baz" />
        
          </div>
          
        </div>
    
      </div>
    );    
  }
}

export default App;
