import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import AddProducts from './Components/AddProducts/AddProducts';
import Header from './Components/Header/Header';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts';

function App() {
  return (
    <div className=''>
      <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/userInfo' element={<Products />}></Route>
        <Route path='/add/products' element={<AddProducts />}></Route>
        <Route path='/update/products/:id' element={<UpdateProducts />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
