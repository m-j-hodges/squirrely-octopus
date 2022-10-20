import react from 'react';
import Header from './NavTabs'

function Home() {

  return (
    <div>
    <Header />
    <div className="experience">
    <h2> This is my Home Page</h2>
    <p> Welcome to my portfolio, which I built using React </p>
    <br></br>
    <div className="card">
  <div className="card-header">
    My Programming knowledge
  </div>
  <div className="card-body">
    <h5 className="card-title">Javascript</h5>
    <ul>
    <li className="card-text">I have spent the last year studying programming primarily in Javascript.</li>
    <li className="card-text">I also have experience using Express.</li>
    <li className="card-text">I have also studied Node.</li>
    <li className="card-text">I plan to continue my studying into programming of Javascript, HTML, and CSS, and Typescript</li>
    </ul>
  </div>
  </div>
  </div>
  </div>
  )

}

export default Home;