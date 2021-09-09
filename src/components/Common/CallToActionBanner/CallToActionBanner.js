import React from 'react';
import styles from './CallToActionBanner.module.scss';

export default function CallToActionBanner(props) {
  const { title } = props;
  return (
    <div className={styles.container}>
      <div
        className={styles.containerBackground}
        style={{ backgroundImage: 'url(/assets/images/lavenders.png)' }}
      ></div>
      <div className={styles.titleWrap}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
