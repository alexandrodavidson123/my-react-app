

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../assets/styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    // Перенаправление на страницу 404
    navigate("/404");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>
          Кандидаты с творческим и <br /> Инженерным образованием
        </h1>
        <h4>
          Это место, где можно проявить себя и получить работу начального уровня в передовых компаниях. <br />
          Начните свою карьеру здесь.
        </h4>
        <button 
          className={styles.buttonjoin} 
          onClick={handleJoinClick}
        >
          Присоединяйтесь прямо сейчас
        </button>
        <p>Ищете кандидата? Принимайте на работу прямо сейчас</p>
      </div>
    </section>
  );
};

export default HeroSection;