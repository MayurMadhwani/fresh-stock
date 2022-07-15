import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import List from "./components/List";
import styled from "styled-components";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar/>
      <br/>
      <Body>
        <Routes>
          <Route 
            path='/'
            element={<List/>}
          />
          <Route
            path='/cart'
            element={<Cart/>}
          />
        </Routes>
      </Body>
    </>
  );
}

const Body = styled.div`
  align-items: center;

`

export default App;
