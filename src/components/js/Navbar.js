import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import React, { useEffect, useState } from "react";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [loc, setLoc] = useState('/')
  const location = useLocation();
  // const loc = location.pathname;
  useEffect(() => {
    setLoc(location.pathname);
  }, [location])

  const hamb = (value) => {
    setNavbar(value);

  };
  return (
    <div class="navbar">
      <nav>
        <h2><Link to='/about'><i>K ANKITH SHENOY</i></Link></h2>
        <ul>
          <li>
            <Link to="/" className="media">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="media">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="media">
              Skills
            </Link>
          </li>
          {/* <li>
            <Link to="/qualifications" className="media">
              Qualifications
            </Link>
          </li> */}
          <li>
            <Link to="/projects" className="media">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="media">
              Contact
            </Link>
          </li>
          <li >
            <a href="#" onClick={() => hamb(true)} id="hamb">&#9776;</a>
          </li>
        </ul>
        {navbar ?
          <>
            <ul class="sidebar">
              <li>
                <a href="#" onClick={() => hamb(false)} id="hamb">&#x2715;</a>
              </li>
              {
                loc === "/" ?
                  ""
                  :
                  <li>
                    <Link to="/" onClick={() => hamb(false)}>Home</Link>
                  </li>
              }
              {
                loc === "/about" ?
                  ""
                  :
                  <li>
                    <Link to="/about" onClick={() => hamb(false)}>About</Link>
                  </li>
              }
              {
                loc === "/skills" ?
                  ""
                  :
                  <li>
                    <Link to="/skills" onClick={() => hamb(false)}>Skills</Link>
                  </li>
              }
              {/* {
                loc === "/qualifications" ?
                  ""
                  :
                  <li>
                    <Link to="/qualifications" onClick={() => hamb(false)}>Qualifications</Link>
                  </li>
              } */}
              {
                loc === "/project" ?
                  ""
                  :
                  <li>
                    <Link to="/project" onClick={() => hamb(false)}>Projects</Link>
                  </li>
              }
              {
                loc === "/skills" ?
                  ""
                  :
                  <li>
                    <Link to="/skills" onClick={() => hamb(false)}>Connect</Link>
                  </li>
              }
            </ul>
          </>
          :
          ""
        }

      </nav>

    </div >
  );
}
export default Navbar;
