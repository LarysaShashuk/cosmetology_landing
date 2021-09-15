import React from 'react';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBlock}>
        <h1 className={styles.title}>Секрети краси та молодості для кожного</h1>
        <p className={styles.description}>
          Косметологічний кабінет Felicita. Професійний догляд за обличчям та
          моделювання тіла.
          <span className={styles.introduce}>
            Косметолог - естетист Тетяна Ярмошук.
          </span>
        </p>

        <button className={styles.contentButton}>Детальніше</button>
      </div>
      <div className={styles.imgBlock}>
        <div
          className={styles.backgroundImg}
          style={{ backgroundImage: 'url(/assets/images/lavenders.png)' }}
        ></div>
        <div
          className={styles.mainImg}
          style={{ backgroundImage: 'url(/assets/images/main_photo.png)' }}
        ></div>
      </div>
    </div>
  );
}
