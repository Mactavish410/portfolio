import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
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
        <p>Eugene</p>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <a href="#">
              <span>#</span>главная
            </a>
          </li>
          <li>
            <a href="#">
              <span>#</span>проекты
            </a>
          </li>
          <li>
            <a href="#">
              <span>#</span>о-себе
            </a>
          </li>
        </ul>
        {/* <p>a</p> */}
      </div>
    </div>
  );
}

export default Header;
