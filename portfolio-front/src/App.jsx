
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AdminProjects from './pages/AdminProjects/AdminProjects';
import AdminSkills from './pages/AdminSkills/AdminSkills';
import Error from './pages/Error/Error';


const App = () => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/admin-page-projects" element={token ? <AdminProjects /> : <Navigate to="/404" />} />
        <Route path="/admin-page-skills" element={token ? <AdminSkills /> : <Navigate to="/404" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;