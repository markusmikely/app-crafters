import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import HomePage from './components/pages/HomePage';
import Layout from "./components/layout/Layout";
import CookiesPage from "./components/pages/CookiesPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ScrollToHashElement from "./components/shared/ScrollToHashElement";
import BlogPage from "./components/pages/BlogPage";
import ArticlePage from "./components/pages/ArticlePage";

function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Layout>   
          <Routes>
            <Route path='/' element={<HomePage />} /> 
            <Route path='/cookies-policy' element={<CookiesPage />} /> 
            <Route path='/privacy-policy' element={<PrivacyPage />} /> 
            <Route path='/terms' element={<TermsPage />} /> 
            <Route path='/blog' element={<BlogPage />} /> 
            <Route path='/blog/:id' element={<ArticlePage />} /> 
            <Route path='*' element={<NotFoundPage />} /> 
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;
