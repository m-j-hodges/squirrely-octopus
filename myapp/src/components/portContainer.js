import React, { useState} from 'react';
// import myProjects from './myProjects'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Header from './NavTabs'
import Portfolio from './Portfolio'

export default function PortContainer() {

const [currentPage, setCurrentPage] = useState('Home')



const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Contact') {
    return <Contact />;
  }
  if (currentPage === 'Resume') {
    return <Resume />;
  }
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  return <Contact />;
}

const handlePageChange = (page) => setCurrentPage(page)


return (
  <div>
  <Header currentPage={currentPage} handlePageChange={handlePageChange} />
 {renderPage()}
 </div>
)

}
