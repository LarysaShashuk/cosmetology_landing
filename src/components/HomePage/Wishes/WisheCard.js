import React from 'react';
import styles from './WisheCard.module.scss';
import Arrow from './ArrowSvg';
export default function WisheCard(props) {
  const { title, path } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}...</h3>
      <div href={path} className={styles.link}>
        {Arrow}
      </div>
    </div>
  );
}
