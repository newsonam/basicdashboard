import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import Sidenav from './components/Sidenav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      
     <Router>
     <div className="row">
      <div className="col-sm-3">
     <Sidenav/>
     </div>
     <div className="col-sm-9">
     <Routes>
     <Route exact path="/" element={<Dashboard />}/>
      </Routes>
      {/* <Sidenav/> */}
      </div>
      </div>
     </Router>
     </div>
      
  );
}

export default App;
