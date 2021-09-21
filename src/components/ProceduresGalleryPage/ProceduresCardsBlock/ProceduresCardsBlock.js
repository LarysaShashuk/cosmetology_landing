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

  const [contentBlockHeight, setContentBlockHeight] = useState(null);
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
    const cardPadding =
      +windowWidth > 656
        ? 35
        : +windowWidth < 656 && +windowWidth > 490
        ? 20
        : 10;
    const buttonHeight = +windowWidth > 900 ? 76 : 50;
    const buttonPadding =
      +windowWidth > 900
        ? 50
        : +windowWidth < 900 && +windowWidth > 421
        ? 30
        : 40;
    const blockHeight =
      (cardHeight + cardPadding) * rowsNumber + buttonHeight + buttonPadding;

    return blockHeight;
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);

    setContentBlockHeight(
      getContentBlockHeight(proceduresList.length, windowDimensions)
    );

    return () => window.removeEventListener('resize', handleResize);
  }, [proceduresList.length, windowDimensions]);

  return (
    <>
      <div
        className={styles.container}
        style={{
          height: `${contentBlockHeight}px`,
        }}
      >
        <div className={styles.content}>
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
      </div>
    </>
  );
}
