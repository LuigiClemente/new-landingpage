"use client"
// Importing necessary libraries and components
import React, { useRef, useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Cards from '../Cards/Cards';
import Briefs from '../Briefs/Briefs';
import Footer from '../Footer/Footer';
import { Scroll } from '../AutoScroll/Scroll';
import { Navigation } from '../Navigation';
import { cardsData } from '~/utils/cardsData';



export const Main = () => {
  const [cards, setCards] = useState(cardsData);
  const selectedCard = cards.find((card) => card.selected);
  
  // Using useRef for DOM access
  const cardsDetailsSection = useRef(null);

  // Function to scroll to a specific ref within the page
  const scrollToRef = (ref:any) => {
    if(ref.current) {
      ref.current.scrollIntoView();
    }
  };

  // Function to execute scrolling to the cards details section
  const executeScroll = () => scrollToRef(cardsDetailsSection);

  // Function to handle card selection
  const selectCard = (cardId:any) => {
    const revisedCards = cards.map((card) => ({
      ...card,
      selected: card.id === cardId,
    }));

    setCards(revisedCards);
    executeScroll();
  };

  // Render the main component
  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-[#0123] text-center text-white">
      {/* React Compare Slider Component */}
      <ReactCompareSlider
        changePositionOnHover
        boundsPadding={0}
        itemOne={<CompareSliderItem theme="dark" navigationSection="dark" scrollItems="/assets/day" />}
        itemTwo={<CompareSliderItem theme="light" navigationSection="light" scrollItems="/assets/night" />}
        keyboardIncrement="5%"
        position={50}
        style={{ height: '130vh', width: '100%' }}
      />

      {/* Cards Component */}
      <Cards cards={cards} selectCard={selectCard} />

      {/* Briefs Component */}
      <Briefs reference={cardsDetailsSection} selectedCard={selectedCard} otherCards={cards.filter((card) => !card.selected)} selectCard={selectCard} />

      {/* Footer Component */}
      <Footer  />
    </main>
  );
};

// New component to avoid repetition in the ReactCompareSlider items
const CompareSliderItem = ({ theme, navigationSection, scrollItems } : any) => (
  <div className={`${theme === "dark" ? "bg-secondary-dark " : "bg-primary-light"} flex flex-col justify-between w-[100vw] h-[130vh] ${theme}-section relative`}>
    <Navigation section={navigationSection} />
    <h1 className={` text-${theme === 'dark' ? 'white' : 'black'}  text-6xl md:text-8xl font-semibold tracking-wide`}>
      Supernatural <br />
      ao <span className={`text-${theme === 'dark' ? 'primary-light' : 'my-green'}  font-dancing-script`}>aniotecer</span>
    </h1>
    <Scroll items={Array.from({ length: 11 }, (_, i) => `${scrollItems}/${i}.webp`)} />
  </div>
);
