import data from './data';
import React from 'react';
import Product from './components/Product';

function App() {
  return (
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
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </main>
        <footer className="row center">
          All right reserved (photo copy right belongs to vtech company from
          amazon.de)
        </footer>
      </div>
    </div>
  );
}

export default App;
