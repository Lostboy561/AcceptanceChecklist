import React from 'react';
import './App.css';

import {Header} from './components/header/header.component.jsx';
import {Tires} from './components/tires/tires.component.jsx';
import {Mx} from './components/mx/mx.component.jsx';
import {Brakes} from './components/brakes/brake.component.jsx';
import {Manuals} from './components/manuals/manuals.component.jsx';




class App extends React.Component {

  render(){
  return (
    <div id="main" className="App">
      <Header/>
      <Tires/>
      <Mx/>
      <Brakes/>
      <Manuals/>
    </div>
    )
   }
 };

export default App;
