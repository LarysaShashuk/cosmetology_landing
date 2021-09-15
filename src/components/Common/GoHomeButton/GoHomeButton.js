import React from 'react';

import styles from './GoHomeButton.module.scss';

export default function GoHomeButton(props) {
  const { handleGoBack } = props;

  return (
    <button onClick={() => handleGoBack()} className={styles.button}>
      Повернутися назад
    </button>
  );
}
