import React from 'react';
import {render} from 'react-dom';
import './style.css';

import {TableCell} from './containers/table';
import axios from 'axios';



class App extends React.Component {
    render () {
      return (
        <div>
            <TableCell/>
            <p> Hello React!</p>
        </div>);
    }
  }
  
render(<App/>, document.getElementById('app'));