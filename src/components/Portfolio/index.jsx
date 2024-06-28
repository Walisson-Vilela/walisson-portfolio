import React, { useState } from "react";
import styles from "./portfolio.module.css";
import UiPicture from "../../assets/images/ui.png";
import UxPicture from "../../assets/images/ux.png";
import webPicture from "../../assets/images/web-development.png";
import UiBackground from "../../assets/images/uiBackground.png";
import UxBackground from "../../assets/images/uxBackground.jpg";
import DevBackground from "../../assets/images/devBackground.jpg";
import ActionAreaCard from "../../assets/Components/Card";

const cardsData = [
  {
    title: "UI Design",
    id: 'web',
    content:
      "Criação de interfaces digitais intuitivas e esteticamente agradáveis para melhorar a experiência do usuário.",
    skills: "Testes A/B, Figma, AdobeXD",
    imageUrl: UiPicture,
    backgroundImageUrl: UiBackground,
  },
  {
    title: "UX Design",
    id: 'ux',
    content:
      "Soluções eficazes e intuitivas para produtos digitais, focando na usabilidade, acessibilidade e satisfação do usuário.",
    skills: "UX Research, Design Thinking, Double Diamond",
    imageUrl: UxPicture,
    backgroundImageUrl: UxBackground,
  },
  {
    title: "Desenvolvimento Front-End",
    id: 'frontEnd',
    content: "Desenvolvimento de sites e sistemas web",
    skills: "HTML, CSS, Javascript, ReactJS",
    imageUrl: webPicture,
    backgroundImageUrl: DevBackground,
  },
];

function Portfolio() {
  const [selectedId, setSelectedId] = useState(null);

  const handleFilterClick = (id) => {
    setSelectedId(id);
  };

  const filteredCards = selectedId
    ? cardsData.filter(card => card.id === selectedId)
    : cardsData;

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.mainSection}>
        <div className={styles.section}>
          <h2>Portfólio</h2>
          <div className={styles.hr}></div>
        </div>
        <div className={styles.filterButtons}>
          <button onClick={() => handleFilterClick('web')}>Web Design</button>
          <button onClick={() => handleFilterClick('ux')}>UI | UX Design</button>
          <button onClick={() => handleFilterClick('frontEnd')}>Front-End</button>
          <button onClick={() => handleFilterClick(null)}>Mostrar Todos</button>
        </div>
        <div className={styles.cardsArea}>
          <div className={styles.cards}>
            {filteredCards.map((card, index) => (
              <ActionAreaCard
                key={index}
                id={card.id}
                title={card.title}
                content={card.content}
                skills={card.skills}
                imageUrl={card.imageUrl}
                backgroundImageUrl={card.backgroundImageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
