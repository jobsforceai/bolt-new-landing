import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import JobApply from './pages/JobApply';
import JobApplyForm from './pages/JobApplyForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="apply/:id" element={<JobApply />} />
        <Route path="apply/:id/form" element={<JobApplyForm />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Routes>
  );
}

export default App;