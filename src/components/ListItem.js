import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { update } from '../features/cartSlice';
import { useState } from 'react';

const ListItem = (props) => {

  const category = props.category[0].toUpperCase() + props.category.substring(1);
  let navigate = useNavigate();

  const cartItems = useSelector((state)=>state.cartItems.value);
  const dispatch = useDispatch();

  let newCartItems;
  
  const addToCart = ()=>{

    const info = {
      title: props.title,
      quantity:1,
      price: props.price,
      imageUrl: props.url,
    };

    let check = true;

    if(cartItems.length > 0){

      for(let i = 0 ; i < cartItems.length ; i++){
        
        if(cartItems[i].title === props.title){
          
          newCartItems = [...cartItems];
          newCartItems[i] = {...newCartItems[i], quantity: newCartItems[i].quantity+1}

          check = false;
          break;
        }
  
      }
    }
    
    if(cartItems.length === 0 || check){

      newCartItems = [...cartItems, info];

    }

    dispatch(update(newCartItems));

    navigate('/cart');
  }

  return (
    <Item>
        <Header>
          <span><Span>Category: </Span>{category}</span>
        </Header>
        <img src={props.url} alt=""/>
        <Title>{props.title}</Title>
        <Info><Span>Price: </Span>₹{props.price}</Info>
        <Button onClick={addToCart}>Add to Cart</Button>
    </Item>
  )
}

const Item = styled.div`
    height: 600px;
    width: 350px;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 20px;
    border: 1px solid;
    border-radius: 5px;
    border-color: lightgray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    img{
        height: 60%;
        max-width: 330px;
        border: 1px solid;
        border-radius: 10px;
        border-color: lightgray;
        padding: 2px;
    }

`

const Header = styled.div`
  width: 95%;
  height: 20px;
  margin-top: 5%;
  margin-bottom: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

const Span = styled.span`
  font-weight: bold;
`

const Title = styled.div`
  text-align: left;
  margin-top: 5%;
  margin-left: 5%;
`

const Info = styled.div`
  text-align: left;
  margin-top: 5%;
  margin-left: 5%;
`

const Button = styled.button`
  display: flex;
  margin-top: 5%;
  margin-left: 5%;
  height: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-justify: center;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 18px;
  padding: 10px 15px 10px 15px;
  background-color: #11E0E7;
  &:hover{
    cursor: pointer;
    background-color: darkblue;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

export default ListItem