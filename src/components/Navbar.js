import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    
      <nav className="navi shadow mb-4 bg-white rounded">
        <div className="navi-menu flexi-row">
            <div className="navi-brand">
                <a href="#" className="text-gray"><strong><i>árbol.org</i></strong></a>
            </div>
            <div className="toggle-collapse">
                <div className="toggle-icons">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div>
                <ul className="navi-items">
                    <li className="navi-link">
                        <a href="#">Home</a>
                    </li>
                    <li className="navi-link">
                        <a href="#">About us</a>
                    </li>
                    <li className="navi-link">
                        <a href="#">Our Causes</a>
                    </li>
                    <li className="navi-link">
                        <a href="#">Our Mission</a>
                    </li>
                    <li className="navi-link">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="social text-gray">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    </nav>

      
  
  )
}

export default Navbar