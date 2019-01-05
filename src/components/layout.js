import React from "react";
import { Link } from "gatsby";

import "./styles.css";
import Img from "../components/Img";


const Layout = ({ children }) => (
<>
  <ul className="links container">
     <li>
        <Link to="/">
          <Img src={ep_01} className="link-img" />
        </Link>
     </li>
     <li>
        <Link to="/projects">
          <Img src={ep_02} className="link-img" />
        </Link>
     </li>
     <li>
        <Link to="/about">
          <Img src={ep_03} className="link-img" />
        </Link>
     </li>
   </ul>
   <div className="container">{children}</div>
 </>
);

export default Layout;

