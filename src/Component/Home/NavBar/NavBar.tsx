import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} className='menu1' to='/' >Milk Candy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} className='menu2' to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} className='menu3' to='/dashboard'>Dashboard</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} className='menu4' to='/singup'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;