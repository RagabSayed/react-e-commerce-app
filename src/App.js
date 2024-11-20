import { RouterProvider } from 'react-router-dom';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from'./Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/UserCompon/SignUp';
import ViewOneProduct from './Components/HomeComp/ViewOneProduct';
import ViewAllProducts from './Components/HomeComp/ViewAllProducts';
import LogIn from './Components/UserCompon/LogIn';
import Wishlist from './Components/UserCompon/Wishlist';
import Cart from './Components/UserCompon/Cart';
import CheckOut from './Components/UserCompon/CheckOut';
import MyAccount from './Components/UserCompon/MyAccount';
import NotFoundPage from './Components/NotFoundPage';
import ViewCategoryProducts from './Components/HomeComp/ViewCategoryProducts';

function App() {
  return (
    // <RouterProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Root />}> */}
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign up' element={<SignUp />} />
            <Route path='home/products/:productId' element={<ViewOneProduct />} />
            <Route path='home/products' element={<ViewAllProducts />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='home/wishlist' element={<Wishlist />} />
            <Route path='home/cart' element={<Cart />} />
            <Route path='home/cart/checkout' element={<CheckOut />} />
            <Route path='home/myaccount' element={<MyAccount />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='home/categoryProducts/:categoryId' element={<ViewCategoryProducts />} />

          {/* </Route> */}
        </Routes>
      </Router>
    // </RouterProvider>
    
    
  );
}

export default App;
