import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Book App Managment</h1>
            <hr />
            <div className="links">
             <NavLink to="/" className="link" activeClassName="active" exact>
               Books List
             </NavLink>
             <NavLink to="/" className="link" activeClassName="active" exact>
               Add Book
             </NavLink>
            </div>
        </header>
    )
}

export default Header;