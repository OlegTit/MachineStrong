import { React, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MapPage } from './components/MapPage';
import { RoutePage } from './components/RoutePage';
import { StatePage } from './components/StatePage';
import { CameraPage } from './components/CameraPage';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from '../node_modules/react-router-dom/dist/index';
function App() {
    const footerRef = useRef(null);

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
      <div className="App">
          <BrowserRouter>
              <Header onScrollToFooter={scrollToFooter} />
              <Routes>
                  <Route path="/" element={<MapPage />}></Route>
                  <Route path="/route" element={<RoutePage />}></Route>
                  <Route path="/camera" element={<CameraPage />}></Route>
                  <Route path="/history" element={<StatePage />}></Route>
              </Routes>
              <Footer ref={footerRef} />
          </BrowserRouter>

    </div>
  );
}

export default App;
