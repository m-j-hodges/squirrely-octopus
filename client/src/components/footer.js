import react from 'react';
import envelope from '../files/edited_small_env.png'
import linkedIn from '../files/LinkedIn.png'




function Footer() {

function changeFont(event) {
  const target = event.target
  target.setAttribute("style", "font-size: 18px; font-weight: bold;")
}
function removeFont(event) {
  const target = event.target
  target.removeAttribute("style")
}

  return (
    
    <div>
    <p> Connect with me!</p>
    <img width="20px" className="d-inline" src={envelope} /><a className="d-inline" href="mailto:matt.j.hodges@icloud.com" onMouseOut={(e) => removeFont(e)} onMouseEnter={(e) => changeFont(e)}> email me!</a>
    <br></br>
    <img width="20px" className="d-inline-block" src={linkedIn}  /><a onMouseOut={(e) => removeFont(e)} onMouseEnter={(e) => changeFont(e)} href="https://www.linkedin.com/in/matthew-hodges-23395b67/"> My LinkedIn page </a>
    </div>

  )

}

export default Footer;