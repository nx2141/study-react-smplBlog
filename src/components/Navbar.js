import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faFilePen , faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link></li>
        <li><Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />記事投稿</Link></li>
        <li><Link to="/login"><FontAwesomeIcon icon={faArrowRightFromBracket} />ログイン</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
