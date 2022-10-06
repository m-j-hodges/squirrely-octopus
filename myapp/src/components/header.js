import react from 'react'
import {useState} from 'react'

function Header() {


const [login, setLogin] = useState(false)

function handleLogin() {
  login == false ? setLogin(true) : setLogin(false)
}



  return (
  <header>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse border" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" onClick={handleLogin} href="#">{login == true ? 'Logout' : 'Login'}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">My Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="p-5 text-center bg-light">
    <h1 class="mb-3">Welcome to my Portfolio!</h1>
    <h4 class="mb-3">Subheading</h4>
  </div>
</header>
  )
}

export default Header;