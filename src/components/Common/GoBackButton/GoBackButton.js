import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import styles from './GoBackButton.module.scss';

function GoBackButton(props) {
  const { history } = props;
  const { action } = history;

  const handleGoBack = () => {
    return history.goBack();
  };

  return (
    <>
      {action === 'PUSH' && (
        <button onClick={() => handleGoBack()} className={styles.button}>
          Повернутися назад
        </button>
      )}
      {action === 'POP' && (
        <Link to="/" className={styles.button}>
          Повернутися на головну
        </Link>
      )}
    </>
  );
}

export default withRouter(GoBackButton);
