import React from 'react';
import WISHES_INFORMATION from '../../../data/WishesInformation';
import WisheCard from './WisheCard';
import styles from './Wishes.module.scss';

export default function Wishes() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Я хочу...</h2>
      <div className={styles.content}>
        {WISHES_INFORMATION.map((item) => {
          return <WisheCard key={item.id} title={item.title} path={item.id} />;
        })}
      </div>
    </div>
  );
}
