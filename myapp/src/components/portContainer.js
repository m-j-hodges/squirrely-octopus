import React, { useState} from 'react';
import myProjects from './myProjects'
import Header from './header'




const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Blog') {
    return <Blog />;
  }
  return <Contact />;
};