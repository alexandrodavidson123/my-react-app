
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import defaultStyles from "../../assets/styles/InfoSection.module.css";
import buttonStyles from "../../assets/styles/Button.module.css"; // Создайте этот файл для стилей кнопки

interface CardListProps {
  limit?: number;
  containerClassName?: string;
}

const CardList: React.FC<CardListProps> = ({ limit = 3, containerClassName }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    try {
      const staticCards: CardData[] = [
        {
          id: 1,
          title: "Профессиональный профиль",
          text: "Мы знаем, что поиск подходящей работы - это стресс, поэтому мы упростили его. Это займет всего несколько минут. Создайте бесплатное портфолио на briefclio, чтобы проявить себя с лучшей стороны и привлечь внимание рекрутеров.",
          image: null,
        },
        {
          id: 2,
          title: "Лучшее портфолио",
          text: "Мы знаем, что поиск подходящей работы - это стресс, поэтому мы упростили его. Это займет всего несколько минут. Создайте бесплатное портфолио на briefclio, чтобы проявить себя с лучшей стороны и привлечь внимание рекрутеров.",
          image: null,
        },
        {
          id: 3,
          title: "Мощное резюме",
          text: "Мы знаем, что поиск подходящей работы - это стресс, поэтому мы упростили его. Это займет всего несколько минут. Создайте бесплатное портфолио на briefclio, чтобы проявить себя с лучшей стороны и привлечь внимание рекрутеров.",
          image: null,
        },
      ];
      setCards(staticCards);
    } catch (err) {
      setError("Failed to load cards");
    }
  }, [limit]);

  const handleButtonClick = (cardId: number) => {
    console.log("Button clicked for card:", cardId);
    // Здесь можно добавить любую логику при клике на кнопку
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
      {cards.map(card => (
        <div key={card.id} className={defaultStyles.feature}>
          {/* Добавленная кнопка перед карточкой */}
          <button 
            className={buttonStyles.cardButton}
            onClick={() => handleButtonClick(card.id)}
          >
           {card.id}
          </button>
          
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            onClick={() => console.log("Card clicked:", card.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;