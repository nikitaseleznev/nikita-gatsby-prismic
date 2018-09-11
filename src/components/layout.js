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
       <Link to="/page-2">Page 2</Link>
     </li>
   </ul>
   <div className="container">{children}</div>
 </>
);

export default Layout;

