import React from 'react';
import {Link} from 'react-router-dom';
functiom Navbar(){
return(
<nav>
<Link to="/about">About</Link>
<Link to="/">Home</Link>
<Link to="/Contact">Contact</Link>

</nav>

);
}