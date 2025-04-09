
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Navbar from './pages/Navbar';
import Blogs from './pages/Blogs';
import BlogsDescription from './pages/BlogsDescription'; 
import Skills from './pages/Skills';
import SplashScreen from './pages/SplashScreen';
import { useState, useEffect } from 'react'; 
// import withSplashScreen from "./pages/_withSplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(false);

  const displaySplashScreen = (duration = 8000) => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, duration);
  };
  return (
    <div className='main-container' id="app">
      {showSplash && <SplashScreen />}
      <PageTransition displaySplash={displaySplashScreen}>
    <Navbar/>
    </PageTransition>
    <Routes>
      <Route path='/' element = { <Home />}></Route>
      <Route path='about' element = { <About />}></Route>
      <Route path='blogs' element = { <Blogs/>}></Route>

      <Route path='/blogs/:id' element = { <BlogsDescription/>}></Route>
      <Route path='skills' element = { <Skills/>}></Route>
    </Routes>
    </div>
  );
}
const PageTransition = ({ children, displaySplash }) => {
  const location = useLocation();
  useEffect(() => {
    displaySplash();
  }, [location]);

  return <>{children}</>;
};
export default App;
