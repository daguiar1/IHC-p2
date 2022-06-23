import styled from "styled-components";
import Navbar from "../components/NavBarLogged";
import Announcement from "../components/Announcement";
import Products from "../components/ProductsLogged";
import Footer from "../components/FooterLogged";
import { popularProducts } from "../data";
import React, { Component } from "react";
import Filter from "../components/Filter";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


export default class ProductList extends Component{
  constructor(){
    super();
    this.state={
      products:popularProducts,
      sort:'',
      col:'',
      siz:'',
      gend:'',
      cond:'',
      
    }
    
  }

  
//sorting
sorting = (e)=>{
  //console.log(e.target.value);
  const sorting = e.target.value;

  const sortRes = this.state.products.sort((a,b)=>{
    
    if(sorting==='all'){
      return a.id>b.id?1:-1
    }
    if(sorting==='low'){
      return a.price>b.price?1:-1
    }
    if(sorting==='high'){
      return a.price<b.price?1:-1
    }

  })

  this.setState({
    sort:sorting,
    products:sortRes
  })
}

//filtering by color
filteringColor =(e)=>{
  let categ = e.target.value;
  if(categ ==='all'){
    this.setState({
      col:categ,
      products:popularProducts
    })
  }

  
  else{
    this.setState({
      col:categ,
      products:this.state.products.filter(product => {
        return product.color.indexOf(e.target.value)>=0
        
      })
    })
  }
  console.log(e.target.value);

}

//filtering by size
filteringSize =(e)=>{
  let sz = e.target.value;
  if(sz ==='all'){
    this.setState({
      siz:sz,
      products:popularProducts
    })
  }

  
  else{
    console.log(e.target.value);
    this.setState({
      siz:sz,
      products:this.state.products.filter(product => {
        return product.size.indexOf(e.target.value)>=0
        
      })
    })
  }
  

}

//filtering by gender
filteringGender =(e)=>{
  let gende = e.target.value;
  if(gende ==='all'){
    this.setState({
      gend:gende,
      products:popularProducts
    })
  }

  
  else{
    this.setState({
      gend:gende,
      products:this.state.products.filter(product => {
        return product.gender.indexOf(e.target.value)>=0
        
      })
    })
  }
  console.log(e.target.value);

}

//filtering by condition
filteringCondition =(e)=>{
  let condi = e.target.value;
  if(condi ==='all'){
    this.setState({
      cond:condi,
      products:popularProducts
    })
  }

  
  else{
    this.setState({
      cond:condi,
      products:this.state.products.filter(product => {
        return product.condition.indexOf(e.target.value)>=0
        
      })
    })
  }
  console.log(e.target.value);

}

  render(){
    return (
      
      <Container>
        <Navbar />
        <Announcement />
        <Title>Clothes</Title>
        
        <Filter
          sorting={this.sorting}
          sort={this.state.sort}

          filteringColor={this.filteringColor}
          col={this.state.col}

          filteringSize={this.filteringSize}
          siz={this.state.siz}

          filteringGender={this.filteringGender}
          gend={this.state.gend}

          filteringCondition={this.filteringCondition}
          cond={this.state.cond}
          
          

        />
        <Products products={this.state.products}/>

        
        
        <Footer />
    
      </Container>
      
    );

  }
  

}
