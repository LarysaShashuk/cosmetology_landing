import React from 'react';
import styles from './PromotionBanner.module.scss';

export default function PromotionBanner(props) {
  const { title, subtitle, endTime, img } = props;
  return (
    <div className={styles.container}>
      <div className={styles.sale}>
        <p>Акція</p>
        <div className={styles.saleOval}></div>
      </div>
      <div className={styles.contentImgWrap}>
        <div className={styles.contentWrap}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.endTime}>{endTime}</p>
        </div>
        <div
          className={styles.imgWrap}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
        ></div>
      </div>
    </div>
  );
}
