import React, { Component } from 'react';
import TitleBar from './TitleBar.js'
import '../css/main.css'; 
import logo from '../images/laika-top.png'

class App extends Component {
  render() {
    return (
      <div className="row">
 
        <div className="left">

          <img src={logo}/>
          <h2>Transformer Webtool</h2>
          
          <h1>Input</h1>
          <div className="input">
            <div className="btn-group">
              <button type="button" className="btn active">Markdown</button>
              <button type="button" className="btn">reStructuredText</button>
            </div>
            <textarea defaultValue={""} />
            <div className="counter"><span>[[input_length]] characters</span> ([[maxChars]] max)</div>
          </div>
          
          <div className="bottom-panel">
            <TitleBar title="Documentation" />
            <div>
              <div className="docs">
                <p>The Laika Webtool currently uses the 0.8.0 release of Laika.</p>
                <p>Transformation starts automatically one second after you stop typing.</p>
                <p>The raw document tree and the rewritten tree are often identical. You see
                differences when using features that produce nodes that need to be resolved,
                like link references or headers.</p>
                <p>For more documentation see:</p>
                <ul>
                  <li>The <a href="http://planet42.github.io/Laika/">Laika Manual</a></li>
                  <li>The <a href="http://daringfireball.net/projects/markdown/syntax">Markdown Syntax Documentation</a></li>
                  <li>The <a href="http://docutils.sourceforge.net/docs/user/rst/quickref.html">reStructuredText Quick Reference</a></li>
                  <li>The <a href="https://github.com/planet42/Laika-Webtool">Source Code</a> of this web tool.</li>
                </ul>  
              </div>
            </div>
          </div>

        </div>
        
        <div className="middle-right">
      
        <div className="middle">
  
          <div>
            <TitleBar title="Raw Document Tree Model" />
            <div>
              <pre>[[lastResult_rawTree]]</pre>
            </div>
          </div>
                 
          <div className="bottom-panel">
            <TitleBar title="Rewritten Document Tree Model" />
            <div>
              <pre>[[lastResult_rewrittenTree]]</pre>
            </div>
          </div>
        
        </div>
        
        <div className="right">
      
          <div>
            <TitleBar title="HTML Source" />
            <div>
              <pre>[[lastResult_html]]</pre>
            </div>
          </div>
          
          <div className="bottom-panel">
            <TitleBar title="Rendered HTML" />
            <div>
              <div className="output">
              </div>
            </div>
          </div>
      
        </div>
        
      </div>
    
      </div>
    );    
  }
}

export default App;
