import React from "react";
import styles from "../../assets/styles/QuoteSection.module.css";

const QuoteSection: React.FC = () => (
  <section className={styles.quote}>
    <div className={styles.container}>
      <div className={styles.images}>
        <img src="img/mask.png" alt="mas" className={styles.img_dop1} />
        <img src="img/avatar.png" alt="" className={styles.img_dop2} />
      </div>
      <blockquote>
        <h1>
          Создать свое присутствие в Интернете непросто.<br />
          С помощью  Superjob рекрутерам будет легко найти вас
        </h1>
        <br />
        <div className={styles.author}>
          <h4>Алексей Захаров</h4>
          <p>Основатель компании Superjob</p>
        </div>
      </blockquote>
    </div>
  </section>
);

export default QuoteSection;