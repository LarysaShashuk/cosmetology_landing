import React from 'react';
import { Link } from 'react-router-dom';

import CONTACT_INFORMATION from '../../../data/ContactInformation';
import styles from './Header.module.scss';

export default function Header() {
  const { address, phoneNumber } = CONTACT_INFORMATION;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoWrap}>
        <img src="/assets/icons/logo.svg" alt="logo" />
      </Link>
      <div className={styles.content}>
        <p className={styles.address}>
          {address.city} {address.street}
        </p>
        <a href={`tel:${phoneNumber}`} className={styles.phone}>
          {phoneNumber}
        </a>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
