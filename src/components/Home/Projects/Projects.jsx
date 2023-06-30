import React from "react";
import styles from "./Projects.module.scss";
import items from "../../../assets/projects.json";
import Block from "./Block/Block";
function Project() {
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <div className={styles.left}>
          <h3>
            <span>#</span>проекты
          </h3>
          <div></div>
        </div>
        <a href="">Просмотреть все</a>
      </div>
      <div className={styles.content}>
        {items.map((obj) => (
          <Block key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Project;
