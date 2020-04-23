import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from './components/Footer/modal/modal'
// import Main from './pages/main';
import Doctors from './pages/doctors/main'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/*<Route exact path='/'>*/}
          {/*<Main />*/}
        {/*</Route>*/}
          <Route path={'/'} render={()=> <Doctors /> } />
      </Switch>
    </Router>
  );
}

export default App;
