import React from 'react'
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        Fresh Stock
    </Nav>
  )
}

const Nav = styled.div`
    position: fixed;
    text-align: center;
    align-items: center;
    justify-content: center;
    align-self: top;
    width: 100%;
    height: 55px;
    padding-top: 20px;
    color: white;
    background: rgb(2,0,36);
    background-image: linear-gradient(to right top, #00fffa, #04f0f1, #11e0e7, #1dd1dc, #27c2d0);
    font-size: 28px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1px;
`

export default Navbar