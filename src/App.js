import React, { Component } from 'react';
import { SnackBarProvider } from './SnackBarContext';
import SnackBarControl from './Button.jsx';
import SnackBar from './SnackBar'
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <SnackBarProvider>
         <div className="App">
            <header className="App-header">
             {/* <img src={logo} className="App-logo" alt="logo" /> */}
             <h1 className="App-title">Welcome to React</h1>
             </header>
             <SnackBarControl text="Hey There!"/>
         </div>
        <SnackBar />
     </SnackBarProvider>
     );
   }
}
export default App;