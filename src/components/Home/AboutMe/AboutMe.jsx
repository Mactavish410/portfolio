import styles from "./AboutMe.module.scss";
import man from "../../../assets/img/man.png";

function AboutMe() {
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <h3>
          <span>#</span>о-себе
        </h3>
        <div></div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>Привет, я Евгений</p>
          <p>
            Я фронтенд-разработчик самоучка из Оренбурга. Я могу разрабатывать
            адаптивные веб-сайты и превращать их в современные удобные
            веб-интерфейсы.
          </p>
          <p>
            Преобразование моего творчества и знаний в веб-сайты было моей
            страстью более года. Я помогаю различным клиентам показать себя в
            сети. Я всегда стараюсь узнавать о новейших технологиях и
            фреймворках.
          </p>
          <a href="">Посмотреть всё</a>
        </div>
        <div className={styles.right}>
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
