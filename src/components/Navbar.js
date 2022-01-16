import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
return(
<nav>
<Link to="/">Home</Link>
&nbsp;&nbsp;&nbsp;
<Link to="/about" className="link-style">
 About
</Link>
&nbsp;&nbsp;&nbsp;
<Link to="/Contact">Contact</Link>
<Link to="/Product/1">Product</Link>
</nav>
);
}
export default Navbar;