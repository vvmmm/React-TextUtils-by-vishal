import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
   <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <Link className="nav-link" target="blank" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" target="blank" to="/about">{props.about}</Link> */}

        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" >Courses</Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link disabled" aria-disabled="true">Contact Us</Link> */}
        </li>
        
      </ul>
     
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} bg-${props.mode}`}>
          <input className="form-check-input" onClick={props.change} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
  </div>
</nav>
</div> 
  )
}

export default Navbar

Navbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string
}

// Navbar.defaultProps={
//     title:"Text title",
//     about:"Text about"
// }