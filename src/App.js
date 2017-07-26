import React, { Component } from 'react';
//import css
import './App.css';
//import Button from 'antd/lib/button';
//import components
//import ProductList from './components/votingApp/ProductList';
//import TimersDashboard from './components/timerApp/TimersDashboard';
import Button from './components/form/Button';


class App extends Component {
  render() {
    return (
    <div className="App">
        {/* <ProductList /> */}
        {/* <TimersDashboard /> */}
        <Button/>
    </div>
    );
  }
}

export default App;
