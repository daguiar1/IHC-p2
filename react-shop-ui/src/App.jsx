
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Account from "./pages/Account"
import AccountDetails from "./pages/AccountDetails"


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
      </Routes>
    </Router>
  );
}

export default App;