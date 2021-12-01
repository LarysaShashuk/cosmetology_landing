import React, { useState } from 'react';
import styles from './Introduction.module.scss';
import MoreDetailsPopUp from './MoreDetailsPopUp/MoreDetailsPopUp';

export default function Introduction() {
  const [isMoreDetaisWindowOpen, setMoreDetaisWindowOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentBlock}>
          <h1 className={styles.title}>
            Секрети краси та молодості для кожного
          </h1>
          <p className={styles.description}>
            Косметологічний кабінет Felicita. Професійний догляд за обличчям та
            моделювання тіла.
            <span className={styles.introduce}>
              Косметолог - естетист Тетяна Ярмошук.
            </span>
          </p>

          <button
            onClick={() => setMoreDetaisWindowOpen(true)}
            className={styles.contentButton}
          >
            Детальніше
          </button>
        </div>
        <div className={styles.imgBlock}>
          <div
            className={styles.backgroundImg}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/lavenders.png)`,
              opacity: '20%',
            }}
          ></div>
          <div
            className={styles.mainImg}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/main_photo.png)`,
            }}
          ></div>
        </div>
      </div>
      {isMoreDetaisWindowOpen && (
        <MoreDetailsPopUp handleClose={() => setMoreDetaisWindowOpen(false)} />
      )}
    </>
  );
}
