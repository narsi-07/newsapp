import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar
        height={4}
          color='#f11946'
          progress={progress}
        />

        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" country="in" category="general" />} />
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" country="in" category="entertainment" />} />
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" country="in" category="general" />} />
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" country="in" category="health" />} />
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" country="in" category="science" />} />
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" country="in" category="sports" />} />
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" country="in" category="technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
