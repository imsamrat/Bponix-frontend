import React from 'react';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Newsletter from './Components/Newsletter/Newsletter';
import Product from './Components/Product/Product';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Product></Product>
      <Blog></Blog>
      <Services></Services>
      <Newsletter></Newsletter>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
