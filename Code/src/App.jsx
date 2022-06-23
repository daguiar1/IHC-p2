
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pagesLogged/Cart";
import Account from "./pagesLogged/Account"
import AccountDetails from "./pagesLogged/AccountDetails"
import SellingProducts from "./pagesLogged/SellingProducts"
import Sell from "./pagesLogged/Sell"
import ProductLogged from "./pagesLogged/ProductLogged";
import HomeLogged from "./pagesLogged/Home";
import ProductListLogged from "./pagesLogged/ProductList";


const App = () => {
  return (
    <Router> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/productList" element={<ProductList/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path='/account' element={<Account/>}/>
        <Route exact path='/accountDetails' element={<AccountDetails/>}/>
        <Route exact path='/sellingProducts' element={<SellingProducts/>}/>
        <Route exact path='/sell' element={<Sell/>}/>
        <Route exact path="/homeLogged" element={<HomeLogged/>}/>
        <Route exact path="/productListLogged" element={<ProductListLogged/>}/>
        <Route exact path="/productLogged" element={<ProductLogged/>}/>



      </Routes>
    </Router>
  );
}

export default App;