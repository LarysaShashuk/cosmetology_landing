import React from 'react';
import styles from './AppointmentPopUp.module.scss';
import cx from 'classnames';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import CONTACT_INFORMATION from '../../../../../data/ContactInformation';
import Close from '../../../../Common/IconsSVG/Close';

export default function AppointmentPopUp(props) {
  const { handleClose } = props;

  const height = document.documentElement.scrollHeight;
  const positionWindow = window.pageYOffset;
  const { innerWidth } = window;
  const getMarginTop = (width) => {
    switch (true) {
      case width < 600:
        return 70;

      case width > 600 && width < 735:
        return 100;

      case width > 735:
        return 140;

      default:
        return 50;
    }
  };

  return (
    <div className={styles.container} style={{ height: `${height}px` }}>
    <ClickAwayListener onClickAway={() => handleClose()}>
      <div
        className={styles.innerWrap}
        style={{ marginTop: `${+positionWindow + getMarginTop(innerWidth)}px` }}
      >
        <div onClick={() => handleClose()} className={styles.closeButton}>
          {Close}
        </div>

        <p className={styles.title}>
          Залиште Ваш запит в нашому Телеграмі або Вайбері, а також напишіть
          зручний для вас день та час
        </p>
        <a
          href={`tel:${CONTACT_INFORMATION.phoneNumber}`}
          className={cx(styles.title, styles.phoneNumber)}
        >
          {CONTACT_INFORMATION.phoneNumber}
        </a>
        <div className={styles.buttonsWrap}>
          <a
            href={`tg://resolve?domain=${CONTACT_INFORMATION.telegram}`}
            className={styles.button}
          >
            Telegram
          </a>
          <a
            href={`viber://chat?number=%2B${CONTACT_INFORMATION.viber}`}
            className={styles.button}
          >
            Viber
          </a>
        </div>
      </div>
      </ClickAwayListener>
    </div>
  );
}
