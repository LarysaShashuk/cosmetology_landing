import React from 'react';
import styles from './ProceduresProgramBanner.module.scss';

export default function ProceduresProgramBanner(props) {
  const { proceduresProgram } = props;
  const { title, img } = proceduresProgram;

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: 'url(/assets/images/lavenders.png)' }}
      ></div>
      <div className={styles.contentImgWrap}>
        <div className={styles.contentWrap}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>Підбираються індивідуально</p>
          <button className={styles.button}>Детальніше</button>
        </div>
        <div
          className={styles.imgWrap}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
    </div>
  );
}
