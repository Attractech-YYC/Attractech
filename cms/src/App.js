import './App.css';
import Activities from './component/Activities.js';
import Header from './component/Header.js';
import Likes from './component/Likes.js';
import Login from './component/Login.js';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Container className="content-container">
          <Routes>
            <Route path="/" element={<Login />}> </Route>
            <Route path="/activities" element={<Activities />}> </Route>
            <Route path="/likes" element={<Likes />}> </Route>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
