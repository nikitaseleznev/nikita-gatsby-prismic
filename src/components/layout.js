import React from "react";
import { Link } from "gatsby";

import "./styles.css";
import Img from "../components/Img";
import ep_01 from "../img/ep_01.jpg";
import ep_02 from "../img/ep_02.jpg";
import ep_03 from "../img/ep_03.jpg";

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

