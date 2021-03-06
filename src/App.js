import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Learn from './Components/Learn';
import Daily from './Components/Daily';
import AddAboutUs from './Components/AddAboutUs';
import AboutUs from './Components/AboutUs';
import AddTnC from './Components/AddTnC';
import AddPricing from './Components/AddPricing';
import TnC from './Components/TnC'
import Users from './Components/Users';
import NewPost from './Components/NewPost';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Notifications } from 'react-push-notification';


function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {/* { !user ? (
        <Login />
      ):( */}
        <>
        
		<Header />
		<Notifications position='top-right'/>
		<Router>
        <div className="app__body">
          <Sidebar />
          <Route path="/" exact component={Dashboard} />
          <Route path="/dash" component={Dashboard} />
          <Route path="/users" component={Users} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/learn" component={Learn} />
          <Route path="/daily" component={Daily} />
          <Route path="/add-about-us" component={AddAboutUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/add-TnC" component={AddTnC} />
          <Route path="/add-Pricing" component={AddPricing} />
          <Route path="/TnC" component={TnC} />
        </div>
        <Footer />
      </Router> 

          
        </>
      {/* )} */}
    </div>
  );
}

export default App;
