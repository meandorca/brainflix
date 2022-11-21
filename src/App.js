import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from './pages/Upload/Upload'
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';

function App() {
  const [video, setVideo] = useState([]);

  const timeConvert = (time) => {
    return new Intl.DateTimeFormat('en-US').format(time)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home video={video} setVideo={setVideo} />} />
          <Route path="/:MainVideo" element={<Home video={video} setVideo={setVideo} />} />
          <Route path="upload" element={<Upload />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}



export default App;

