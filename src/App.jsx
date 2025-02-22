import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/Login/Login';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';


function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;