import React from 'react'
import {
  Link,
  link
} from "react-router-dom";


const NavBar =() => {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          <Link className="nav-link active" aria-current="page" to="/business">business</Link>
          <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
          <Link className="nav-link active" aria-current="page" to="/general">general</Link>
          <Link className="nav-link active" aria-current="page" to="/health">health</Link>
          <Link className="nav-link active" aria-current="page" to="/science">science</Link>
          <Link className="nav-link active" aria-current="page" to="/sports">sports</Link>
          <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
        </li>
     
      

       
      </ul>
   
    </div>
  </div>
</nav>
      </div>
    )
  }

export default NavBar
