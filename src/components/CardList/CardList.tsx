// import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
// import type { CardData } from '../../Type';
// import defaultStyles from "../../assets/styles/InfoSection.module.css";

// interface CardListProps {
//   limit?: number;
//   containerClassName?: string; // новый проп для кастомного класса контейнера
// }

// const CardList: React.FC<CardListProps> = ({ limit = 10, containerClassName }) => {
//   const [cards, setCards] = useState<CardData[]>([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState<string | null>(null);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
//       .then(res => res.json())
//       .then(data => {
//         const cardsData: CardData[] = data.map((item: any, index: number) => ({
//           id: item.id,
//           title: `Comment ${index + 1}`,
//           text: item.body,
//           image: null,
//         }));
//         setCards(cardsData);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [limit]);

//   if (loading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка: {error}</p>;

//   return (
//     <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
//       {cards.map(card => (
//         <div key={card.id} className={defaultStyles.feature}>
//           <Card
//             title={card.title}
//             text={card.text}
//             image={card.image}
//             onClick={() => console.log(card.image)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;  


// import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
// import type { CardData } from '../../Type';
// import defaultStyles from "../../assets/styles/InfoSection.module.css";

// interface CardListProps {
//   limit?: number;
//   containerClassName?: string;
// }

// const CardList: React.FC<CardListProps> = ({ limit = 10, containerClassName }) => {
//   const [cards, setCards] = useState<CardData[]>([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState<string | null>(null);

//   useEffect(() => {
//     const staticCards: CardData[] = [
//       {
//         id: 1,
//         title: "Professional Profile",
//         text: "We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter.",
//         image: null,
//       },
//       {
//         id: 2,
//         title: "Best Portfolio",
//         text: "We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
//         image: null,
//       },
//       {
//         id: 3,
//         title: "Powerful Resume",
//         text: "We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by",
//         image: null,
//       },
//     ];
//     setCards(staticCards);
//     setLoading(false);
//   }, [limit]);

//   if (loading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка: {error}</p>;

//   return (
//     <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
//       {cards.map(card => (
//         <div key={card.id} className={defaultStyles.feature}>
//           <Card
//             title={card.title}
//             text={card.text}
//             image={card.image}
//             onClick={() => console.log(card.image)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;



// import React, { useState, useEffect } from "react";
// import Card from "../Card/Card";
// import type { CardData } from '../../Type';
// import defaultStyles from "../../assets/styles/InfoSection.module.css";

// interface CardListProps {
//   limit?: number;
//   containerClassName?: string;
// }

// const CardList: React.FC<CardListProps> = ({ limit = 3, containerClassName }) => {
//   const [cards, setCards] = useState<CardData[]>([]);
//   const [loading, setLoading] = React.useState(false); // Убрали загрузку, так как данные статичны
//   const [error, setError] = React.useState<string | null>(null);

//   useEffect(() => {
//     try {
//       const staticCards: CardData[] = [
//         {
//           id: 1,
//           title: "Professional Profile",
//           text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
//           image: null,
//         },
//         {
//           id: 2,
//           title: "Best Portfolio",
//           text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
//           image: null,
//         },
//         {
//           id: 3,
//           title: "Powerful Resume",
//           text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
//           image: null,
//         },
//       ];
//       setCards(staticCards);
//     } catch (err) {
//       setError("Failed to load cards");
//     }
//   }, [limit]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
//       {cards.map(card => (
//         <div key={card.id} className={defaultStyles.feature}>
//           <Card
//             title={card.title}
//             text={card.text}
//             image={card.image}
//             onClick={() => console.log("Card clicked:", card.id)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;


import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import defaultStyles from "../../assets/styles/InfoSection.module.css";

interface CardListProps {
  limit?: number;
  containerClassName?: string;
}

const CardList: React.FC<CardListProps> = ({ limit = 3, containerClassName }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = React.useState(false); // Убрали загрузку, так как данные статичны
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    try {
      const staticCards: CardData[] = [
        {
          id: 1,
          title: "Professional Profile",
          text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
          image: null,
        },
        {
          id: 2,
          title: "Best Portfolio",
          text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
          image: null,
        },
        {
          id: 3,
          title: "Powerful Resume",
          text: "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefclio to show your best self and get discovered by recruiters.",
          image: null,
        },
      ];
      setCards(staticCards);
    } catch (err) {
      setError("Failed to load cards");
    }
  }, [limit]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={containerClassName ? containerClassName : defaultStyles.features} id="features-container">
      {cards.map(card => (
        <div key={card.id} className={defaultStyles.feature}>
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