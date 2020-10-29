import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import AppNavbar from './components/AppNavbar'
import {Provider} from 'react-redux'
import store from './Store'
import APPbar from './components/Appnavbar1'
import ShoppingCart from './components/ShoppingCart'
import ItemModel from './components/ItemModel'
import {Container} from 'reactstrap'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <>
      <APPbar/>
    <Container>
      <ItemModel/>
      <ShoppingCart/>
      </Container>
      </>
      </Provider>
    </div>
  );
}

export default App;
