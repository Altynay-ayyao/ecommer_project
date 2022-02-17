import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                Droppe Xmas
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="row center">
            All right reserved (photo copy right belongs to vtech company from
            amazon.de)
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
