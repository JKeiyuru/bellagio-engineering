// File: client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Divisions from './pages/Divisions';
import MarketsPage from './pages/Markets';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
// import AdminLogin from './pages/admin/AdminLogin';
// import AdminDashboard from './pages/admin/AdminDashboard';

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/divisions" element={<Divisions />} />
              <Route path="/markets" element={<MarketsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/*" element={<AdminDashboard />} /> */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
