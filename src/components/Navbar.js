import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
        {/* </li> */}
      </ul>

      {/* <div className="d-flex">
        <div className="bg-primary rounded my-2" Onclick={()=>{toggleMode('primary')}} style={{height:'24px',width:'24px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded my-2" Onclick={()=>{toggleMode('danger')}} style={{height:'24px',width:'24px',cursor:'pointer'}}></div>
        <div className="bg-success rounded my-2" Onclick={()=>{toggleMode('success')}} style={{height:'24px',width:'24px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded my-2" Onclick={()=>{toggleMode('warning')}} style={{height:'24px',width:'24px',cursor:'pointer'}}></div>
      </div> */}

      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch mx-2 text-${props.mode==='dark'?'light':'dark'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText:'About Us'
  };