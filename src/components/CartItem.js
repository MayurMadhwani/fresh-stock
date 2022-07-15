import React from 'react'
import styled from 'styled-components'

const CartItem = (props) => {
  return (
    <Main>
      <Image src={props.url}/>
      <Content>
        {props.title}
        <br/>
        <Price>
          <Span>₹{props.price}</Span>
          <Span>x{props.quantity}</Span>
        </Price>
      </Content>
    </Main>
  )
}

const Main = styled.div`
  vertical-align: top;
  width: 90%;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Image = styled.img`
  height: 70px;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
  flex-direction: column;
`

const Span = styled.span`
  font-weight: bold;
`

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`

export default CartItem