
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/CtaSection.module.css";

const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Перенаправляем на страницу 404
    navigate("/404");
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Настройте свой профиль.<br />Позвольте работе найти вас.</h1>
          <button 
            className={styles.ctaButton}
            onClick={handleButtonClick}
          >
            Присоединяйтесь прямо сейчас
          </button>
        </div>
        <img src="img/job-image.png" alt="Job" className={styles.ctaImage} />
      </div>
    </section>
  );
};

export default CtaSection;