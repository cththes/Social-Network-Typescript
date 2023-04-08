import React from "react";
import styles from "./Content.module.css";

interface Props {}

function Content(props: Props) {
  const {} = props;

  return (
    <div className={styles.content}>
      Main
      <div>
        My Posts
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </div>
  );
}

export default Content;
