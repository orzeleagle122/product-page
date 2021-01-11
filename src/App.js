import React from 'react';
import GlobalStyle from './GlobalStyle';
import {Navbar,Footer} from './components';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import Products from './pages/Produts/Products';
import SignUp from './pages/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (

      <Router>
        <GlobalStyle/>
        <ScrollToTop/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer/>

      </Router>
      

  );
}

export default App;
