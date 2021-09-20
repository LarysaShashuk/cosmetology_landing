import React, { useState } from 'react';

import AppointmentPopUp from './AppointmentPopUp/AppointmentPopUp';
import styles from './CallToActionBanner.module.scss';

export default function CallToActionBanner(props) {
  const [isMoreDetaisWindowOpen, setMoreDetaisWindowOpen] = useState(false);

  const { title } = props;
  return (
    <>
      {isMoreDetaisWindowOpen && (
        <AppointmentPopUp handleClose={() => setMoreDetaisWindowOpen(false)} />
      )}
      <div className={styles.container}>
        <div
          className={styles.containerBackground}
          style={{ backgroundImage: 'url(/assets/images/lavenders_long.jpg)' }}
        ></div>
        <div
          className={styles.titleWrap}
          onClick={() => setMoreDetaisWindowOpen(true)}
        >
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </>
  );
}
