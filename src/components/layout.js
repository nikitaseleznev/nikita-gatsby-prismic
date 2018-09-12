import React from "react";
import { Link } from "gatsby";

import "./styles.css";

const Layout = ({ children }) => (
<>
  <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/projects">Projects</Link>
     </li>
     <li>
       <Link to="/about">About+contacts</Link>
     </li>
   </ul>
   <div className="container">{children}</div>
 </>
);

export default Layout;

