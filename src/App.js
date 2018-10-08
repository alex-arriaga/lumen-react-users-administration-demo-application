import React, {Component} from 'react';
import UsersIndex from './components/users/UsersIndex';
import UsersFormCreate from './components/users/UsersFormCreate';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <UsersIndex/>
          <UsersFormCreate/>
          <ToastContainer position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnVisibilityChange
                          draggable
                          pauseOnHover/>
        </div>
    );
  }
}

export default App;
