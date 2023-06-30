import styles from "./Main.module.scss";
import mainImg from "../../../assets/img/main.png";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.left}>
          <h1>
            Eugene - <span>frontend</span> и <span>python</span> разработчик
          </h1>
          <p>
            Он создает адаптивные сайты где пересекаются креативность и
            технологии
          </p>
          <a href="#">Мои контакты =&gt;</a>
        </div>
        <div className={styles.right}>
          {/* <svg
            width="78"
            height="117"
            viewBox="0 0 78 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Union">
              <mask id="path-1-inside-1_530_917" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.75H38.75H77.5V39.5H38.75V78.25H77.5V117H38.75H0V78.25V39.5V0.75Z"
                />
              </mask>
              <path
                d="M0 0.75V-0.25H-1V0.75H0ZM77.5 0.75H78.5V-0.25H77.5V0.75ZM77.5 39.5V40.5H78.5V39.5H77.5ZM38.75 39.5V38.5H37.75V39.5H38.75ZM38.75 78.25H37.75V79.25H38.75V78.25ZM77.5 78.25H78.5V77.25H77.5V78.25ZM77.5 117V118H78.5V117H77.5ZM0 117H-1V118H0V117ZM38.75 -0.25H0V1.75H38.75V-0.25ZM77.5 -0.25H38.75V1.75H77.5V-0.25ZM78.5 39.5V0.75H76.5V39.5H78.5ZM38.75 40.5H77.5V38.5H38.75V40.5ZM39.75 78.25V39.5H37.75V78.25H39.75ZM38.75 79.25H77.5V77.25H38.75V79.25ZM76.5 78.25V117H78.5V78.25H76.5ZM77.5 116H38.75V118H77.5V116ZM0 118H38.75V116H0V118ZM-1 78.25V117H1V78.25H-1ZM-1 39.5V78.25H1V39.5H-1ZM-1 0.75V39.5H1V0.75H-1Z"
                fill="#C778DD"
                mask="url(#path-1-inside-1_530_917)"
              />
            </g>
          </svg> */}
          <img src={mainImg} alt="" />
          <div className={styles.work}>
            <div className={styles.chekbox}></div>
            <p>Сейчас работаю над</p>
            <a href="#">Portfolio</a>
          </div>
        </div>
      </div>
      <div className={styles.quote}>
        С большой мощностью приходит большой счет за электроэнергию
      </div>
    </div>
  );
}

export default Main;
