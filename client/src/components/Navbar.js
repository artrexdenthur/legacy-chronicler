import React  from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Navbar = () =>
  <div>
    <Link
      to="/"
      exact
    >Home</Link>
    <Link
      to="/about"
      exact
    >About</Link>
    <Link
      to="/login"
      exact
    >Login</Link>
  </div>;

