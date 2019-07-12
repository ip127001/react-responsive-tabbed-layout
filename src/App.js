import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import './App.css';
import MainApplication from './Component/MainComponent/MainApplication';

function App() {
  return (
    <div className="App">
        <Route path="/" component={MainApplication} />
    </div>
  );
}

export default withRouter(App);
