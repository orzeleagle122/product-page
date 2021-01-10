import React from 'react';
import GlobalStyle from './GlobalStyle';
import {Navbar} from './components';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (

      <Router>
        <GlobalStyle/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>

      </Router>
      

  );
}

export default App;
