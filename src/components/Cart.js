import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux';
import { useState } from 'react';

const Cart = (props) => {

    const navigate = useNavigate();

    const cartItems = useSelector((state)=>state.cartItems.value);

    const back = ()=>{navigate(-1);}

    let total = 0;

    let newCartItems = cartItems;

    for(let i = 0 ; i < newCartItems.length ; i++){

        total += newCartItems[i].price*newCartItems[i].quantity;

    }

    total = total.toFixed(2);

    // setTotal(temp);

  return (
    <>
        <Main>
            <Header>
                Cart
            </Header>
            <hr/>
            <Container>
                {cartItems && cartItems.map((cartItem)=>

                    <CartItem
                        url = {cartItem.imageUrl}
                        title = {cartItem.title}
                        price = {cartItem.price}
                        quantity = {cartItem.quantity}
                    />
                    
                )}
            </Container>
        </Main>
        <Footer>
            <Total>Total: ₹{total}</Total>
            <i onClick={back} className="fa-solid fa-chevron-left"></i>
        </Footer>
        
    </>
  )
}

const Main = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-top: 80px;
    height: 500px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    overflow: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Header = styled.div`
    
    font-size: 25px;
    text-align: center;
    width: 100%;
    height: 7%;
    
`

const Container = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
`

const Footer = styled.div`
    width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex-direction: column;
    i{
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        margin-top: 20px;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        &:hover{
            cursor: pointer;
        }
    }
`

const Total = styled.div`
    width: 150px;
    height: 20px;
    margin-top:5px;
    padding-top: 10px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    text-justify: center;
    font-size: 20px;
`

export default Cart