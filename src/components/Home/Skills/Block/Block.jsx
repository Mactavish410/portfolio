import styles from "./Block.module.scss";

function Block(obj) {
  return (
    <div className={styles.main}>
      <h2>{obj.title}</h2>
      <p>{obj.info}</p>
    </div>
  );
}

export default Block;
