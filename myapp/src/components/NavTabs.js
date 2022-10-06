import React from 'react';


function Header({currentPage, handlePageChange}) {


return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse border" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About" onClick={() => handlePageChange('AboutMe')}>About Me</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#Portfolio" onClick={() => handlePageChange('Portfolio')}> Portfolio</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
          </li>
          <li className="nav-item">
            <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#Resume"onClick={()=> handlePageChange('Resume')}>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="p-5 text-center bg-light">
    <h1 className="mb-3">Welcome to my Portfolio!</h1>
    <h4 className="mb-3">Subheading</h4>
  </div>
</div>
)
}

export default Header;