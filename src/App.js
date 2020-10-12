import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import ProductContainer from './containers/ProductContainer';
import MessageContainer from './containers/MessageContainer';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductContainer />
            <MessageContainer />
            <CartContainer />  
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
