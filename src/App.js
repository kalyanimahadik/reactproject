import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Submit from './components/submit';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Select from './components/select';
function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center">The New Crud function</h1>
        <Navbar />
        <br />

        <Route exact path='/' component={Submit} />
        <Route path='/select' component={Select} />


      </div>

    </Router>
  );
}

export default App;
