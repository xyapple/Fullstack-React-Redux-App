import React, { Component } from 'react';
//import css
import './App.css';
import Button from 'antd/lib/button';
//import components
import ProductList from './components/votingApp/ProductList';


class App extends Component {
  render() {
    return (
    <div className="App">
        <ProductList />
       <Button type="primary">Button</Button>
     </div>
    );
  }
}

export default App;
