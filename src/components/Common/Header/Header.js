import React from 'react';

import CONTACT_INFORMATION from '../../../data/ContactInformation';

import styles from './Header.module.scss';

export default function Header() {
  const { address, phoneNumber } = CONTACT_INFORMATION;

  return (
    <div className={styles.container}>
      <div className={styles.logoWrap}>
        <img src='/assets/icons/logo.svg' alt='logo' />
      </div>
      <div className={styles.content}>
        <p className={styles.address}>
          {address.city} {address.street}
        </p>
        <p className={styles.phone}>{phoneNumber}</p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
