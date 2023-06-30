import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.title}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Logo">
                <path
                  id="Union"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
                  fill="white"
                />
              </g>
            </svg>
            <h3>Eugene</h3>
            <a href="https://mactavish410@gmail.com/">mactavish410@gmail</a>
          </div>
          <div className={styles.subtitle}>
            Веб дизайнер и фронтенд разработчик
          </div>
        </div>
        <div className={styles.right}>
          <h3>Медиа</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
