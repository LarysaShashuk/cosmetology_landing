import React, { useState, useEffect } from 'react';

import GoBackButton from '../../Common/GoBackButton/GoBackButton';
import ProcedureCard from './ProcedureCard/ProcedureCard';
import styles from './ProceduresCardsBlock.module.scss';

export default function ProceduresCardsBlock(props) {
  const { proceduresList } = props;

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getContentBlockHeight = (cardsNumber, windowWidth) => {
    let cardsPerRow;
    switch (true) {
      case windowWidth > 1005:
        cardsPerRow = 3;
        break;

      case windowWidth < 1005 && +windowWidth >= 655:
        cardsPerRow = 2;
        break;

      default:
        cardsPerRow = 1;
    }
    const rowsNumber = Math.ceil(cardsNumber / cardsPerRow);
    const cardHeight = +windowWidth > 480 ? 375 : 280;
    const cardPadding = 35;
    const blockHeight = (cardHeight + cardPadding) * rowsNumber;

    return blockHeight;
  };

  return (
    <>
      <div
        className={styles.content}
        style={{
          height: `${getContentBlockHeight(
            proceduresList.length,
            windowDimensions
          )}px`,
        }}
      >
        {proceduresList.map((item) => {
          return (
            <ProcedureCard
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <GoBackButton />
      </div>
    </>
  );
}
