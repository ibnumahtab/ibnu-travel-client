import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import useServices from './Hooks/useServices';
import AboutUs from './Pages/AboutUs/AboutUs';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/Contact Us/ContactUs';
import AddServices from './Pages/Dashboard/AddServices/AddServices';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import DirectBooking from './Pages/DirectBooking/DirectBooking';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import AfterResetPass from './Pages/Login/ForgatePass/AfterResetPass';
import ForgatePass from './Pages/Login/ForgatePass/ForgatePass';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import ScrollToTop from './Pages/Shared/ScrollToTop';

function App() {
    const [services] = useServices([]);
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Navbar></Navbar>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>
                        <Route exact path="/services">
                            <Services></Services>
                        </Route>
                        <PrivateRoute exact path="/services/:serviceId">
                            <ServiceDetails></ServiceDetails>
                        </PrivateRoute>
                        <PrivateRoute exact path="/appointment">
                            <Appointment></Appointment>
                        </PrivateRoute>
                        <PrivateRoute exact path="/directBooking">
                            <DirectBooking></DirectBooking>
                        </PrivateRoute>
                        <Route exact path="/aboutUs">
                            <AboutUs></AboutUs>
                        </Route>
                        <Route exact path="/contactUs">
                            <ContactUs></ContactUs>
                        </Route>
                        <Route exact path="/login">
                            <Login></Login>
                        </Route>
                        <PrivateRoute exact path="/my-profile">
                            <MyProfile />
                        </PrivateRoute>
                        <PrivateRoute exact path="/addServices">
                            <AddServices></AddServices>
                        </PrivateRoute>
                        <PrivateRoute exact path="/myOrders">
                            <MyOrders></MyOrders>
                        </PrivateRoute>
                        <PrivateRoute exact path="/manageAllOrders">
                            <ManageAllOrders></ManageAllOrders>
                        </PrivateRoute>
                        <Route exact path="/register">
                            <Register></Register>
                        </Route>
                        <Route exact path="/forgatePass">
                            <ForgatePass></ForgatePass>
                        </Route>
                        <Route exact path="/afterResetPass">
                            <AfterResetPass></AfterResetPass>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
