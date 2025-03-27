import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FileUpload } from './components/FileUpload';
import { AdminDashboard } from './components/AdminDashboard';
import { Login } from './components/Login';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FileUpload />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;