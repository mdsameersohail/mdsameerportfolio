import {Link, withRouter,NavLink} from 'react-router-dom'



import './index.css'

const Header = () => {
const nav_header = document.getElementById("head");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
  navIcon.classList.toggle("fa-xmark")
};

  return(
      <>
      <header className="header" id='head'>
        <h1 className='header-heading'>Md Sameer Sohail</h1>
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink exact to='/' className="navbar-link" activeClassName="navbar-link-active">Home</NavLink></li>
            <li><NavLink to='/about' className="navbar-link" activeClassName="navbar-link-active">About</NavLink></li>
            <li><NavLink to='/skills' className="navbar-link" activeClassName="navbar-link-active">Skills</NavLink></li>
            <li><NavLink to='/myworks' className="navbar-link" activeClassName="navbar-link-active">My Work</NavLink></li>
            <li><NavLink to='/contact' className="navbar-link" activeClassName="navbar-link-active">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars fa-2x fav-bars" id='navIcon'></i>
        </div>
      </header>
      </>
  )
}

export default withRouter(Header)