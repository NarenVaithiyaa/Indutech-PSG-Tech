import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ExpertTalk from './pages/expert-talk';
import Registration from './pages/registration';
import AbstractSubmission from './pages/abstract-submission';
import Committee from './pages/committee';
import AboutUs from './pages/about-us';
import HomePage from './pages/home-page';
import ContactUs from './pages/contact-us';
import Accommodation from './pages/accommodation';
import Sponsorship from './pages/sponsorship';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/expert-talk" element={<ExpertTalk />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/abstract-submission" element={<AbstractSubmission />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;