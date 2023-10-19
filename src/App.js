
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
       
     <Routes>
 
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/products' element={<Products/>}></Route>
      <Route exact path='/product/:id' element={<Product/>}></Route>
      <Route exact path='/cart' element={<Cart/>}></Route>
    
     
     </Routes>
     </Router>
    </>
  );
}

export default App;
