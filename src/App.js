import React from 'react';
import './App.css';
import logo from './assets/logo1.png';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Learn from './Components/Learn';
import Daily from './Components/Daily';
import Modules from './Components/Modules'
// import Feed3 from './Components/Feed3';
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
              <Route path="/dash" component={Dashboard} />
              <Route path="/users" component={Users} />
              <Route path="/new-post" component={NewPost} />
              <Route path="/learn" exact component={Learn} />
              <Route path="/daily" component={Daily} />
              {/* <Route path="/learn/:id" component={Modules} /> */}
            </div>
          </Router> 

          <Footer />
        </>
      {/* )} */}
    </div>
  );
}

export default App;
