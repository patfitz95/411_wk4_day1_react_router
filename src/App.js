import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Router from './Router';
import ReactDOM from 'react-dom';
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Router />
  </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;