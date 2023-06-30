import React from "react";
import styles from "./Block.module.scss";

function Block(obj) {
  return (
    <div className={styles.block}>
      <img src={obj.imgUrl} alt="" />
      <p className={styles.languages}>{obj.languages}</p>
      <div>
        <h3>{obj.title}</h3>
        <p>{obj.subtitle}</p>
        <a href="#">link</a>
      </div>
    </div>
  );
}

export default Block;
