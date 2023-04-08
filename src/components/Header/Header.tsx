import React from "react";
import styles from './Header.module.css'

interface Props {}

const imageURL =
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png";

function Header(props: Props) {
  const {} = props;

  return (
    <div>
      <header className={styles.header}>
        <img src={imageURL} alt="logo"/>
      </header>
    </div>
  );
}

export default Header;
