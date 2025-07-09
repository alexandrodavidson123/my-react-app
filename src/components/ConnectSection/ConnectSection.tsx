import React from "react";
import styles from "../../assets/styles/ConnectSection.module.css";

const ConnectSection: React.FC = () => (
  <section className={styles.connect}>
    <div className={styles.container}>
      <img src="img/connect-image.png" alt="Connect with Recruiter" className={styles.connectImage} />
      <div className={styles.connectText}>
        <h1>Свяжитесь с Рекрутером</h1>
        <p>
          Получите мгновенный доступ к отборному списку лучших творческих и технических специалистов, активно ищущих свою следующую работу. Найдите высококвалифицированную работу!
        </p>
      </div>
    </div>
  </section>
);

export default ConnectSection;