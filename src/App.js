import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/Home/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import ManageService from './Pages/Home/ManageService/ManageService';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
        <Route path='/manageservice' element={<ManageService></ManageService>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
