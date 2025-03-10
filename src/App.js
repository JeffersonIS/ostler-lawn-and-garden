import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
function About() {
  return (
    <div className="App-header">
      <h1>About Page</h1>
      <p>This is the about page</p>
      <Link to="/" className="App-link">Back to Home</Link>
    </div>
  );
}

function App() {
  return (
      <div className="App">
        <Home />
        <Footer />
      </div>
  );
}

export default App;
