import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Developer from './App2';
import Project from './App3';
import BetterProject from './App4';


ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Developer author="Sumit Kawatra" />, document.getElementById('msg'));
ReactDOM.render(<Project />, document.getElementById('project'));

ReactDOM.render(<BetterProject />, document.getElementById('betterProject'));