import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import ListItem from './ListItem';
import Loader from './Loader';


const List = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        
        const getResponse = async()=>{
            
            setLoading(true);
            
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            setData(products);
            setLoading(false);
        }

        getResponse();

    }, [])
    

  return (
    <Main>
        {!data && <Loader/>}
        {data && data.map((product)=>(
            <ListItem
                key = {product.id}
                url = {product.image}
                category = {product.category}
                title = {product.title}
                price = {product.price}
            />
        ))}
    </Main>
  )
}

const Main = styled.div`
    margin-top: 60px;
    margin-left: 10px;
    margin-right: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* text-align: center; */
`

export default List