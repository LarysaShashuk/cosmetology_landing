import React from 'react';
import styles from './WisheCard.module.scss';

export default function WisheCard(props) {
  const { title, path } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}...</h3>
      <div href={path} className={styles.link}>
        <img src='/assets/icons/arrow.svg' alt='arrow right' />
      </div>
    </div>
  );
}
