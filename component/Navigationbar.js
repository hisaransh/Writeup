import Head from 'next/head';
import Link from 'next/link';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Navigationbar = () => (
  <div>
    <Head>
      <title>WriteUp</title>
    </Head>
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <a className="navbar-brand" href="#">Writeup</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    </div>
</nav>
    <style jsx>{`
        .navbar-custom{
          background-color:#22d1ee;
        }
    `}</style>
  </div>
)

export default Navigationbar;
/*
<Nav className="mr-auto">
<Nav.Link href="#home">Home</Nav.Link>
<Nav.Link href="#link">Link</Nav.Link>
  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  <NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
</Nav>

*/
