import React from 'react';
import styles from './ProceduresProgramBanner.module.scss';

export default function ProceduresProgramBanner(props) {
  const { proceduresProgram } = props;
  const { title, img } = proceduresProgram;

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/lavenders.png)`,
        }}
      ></div>
      <div className={styles.contentImgWrap}>
        <div className={styles.contentWrap}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>Підбираються індивідуально</p>
        </div>
        <div
          className={styles.imgWrap}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + img})` }}
        ></div>
      </div>
    </div>
  );
}
