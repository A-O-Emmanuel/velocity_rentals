import Register from './user/Register';
import Login from './user/Login';
import Logout from './user/Logout';
import Account from './user/Account';


function Nav() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse custom-nav--box' id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item custom-nav--items">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>

        <li className="nav-item dropdown custom-nav--items">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Used Cars
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Make</a></li>
            <li><a className="dropdown-item color" href="#">Fuel Type</a></li>
            <li><a className="dropdown-item" href="#">Transmission</a></li>
          </ul>
        </li>

        <li className="nav-item custom-nav--items">
          <a className="nav-link" href="#">Warranty</a>
        </li>

        <Register />
        <Login />
        <Account />
        <Logout />
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Cars by name" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
};

export default Nav;