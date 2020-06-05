/*
  author : @saransh
  --------------------------------------------------------
  Following File contains Navigation bar logic
  To generate Navigation bar on Any page just include <Navigationbar/> on top container element
*/

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
          background-color:#30e3ca;
        }
    `}</style>
  </div>
)

export default Navigationbar;
