import React from "react";
import styles from "./Navbar.module.scss";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <nav className={styles.nav}>
      <div>
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
