import React from 'react';
import {render} from 'react-dom';
import './style.css';

import {TableCell} from './containers/table';

class App extends React.Component {
    render () {
      return (
        <div>
            <TableCell/>
        </div>);
    }
  }
  
render(<App/>, document.getElementById('app'));