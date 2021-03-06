import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import ErrorWork from './Components/ErrorWork/ErrorWork';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Navbar from './Components/Navbar/Navbar';
import Orders from './Components/Orders/Orders';
import Products from './Components/Products/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from './Components/Dashboard/MyOrder';
import Myreview from './Components/Dashboard/Myreview';
import MyProfile from './Components/Dashboard/MyProfile';
import Users from './Components/Dashboard/Users';
import Payment from './Components/Dashboard/Payment';
import MyProfileWork from './Components/MyProfile/MyProfileWork';
import AddData from './Components/AddData/AddData';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Profile' element={<MyProfileWork></MyProfileWork>}></Route>
        <Route path='/product' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/addData' element={<RequireAuth><AddData></AddData></RequireAuth>}></Route>
        <Route path='/tools/:id' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<Myreview></Myreview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<ErrorWork></ErrorWork>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
