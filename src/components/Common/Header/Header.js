import React from 'react';
import { Link } from 'react-router-dom';

import CONTACT_INFORMATION from '../../../data/ContactInformation';
import styles from './Header.module.scss';
import Instagram from '../IconsSVG/Instagram';

export default function Header() {
  const { address, googleMaps, phoneNumber } = CONTACT_INFORMATION;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoWrap}>
        <img
          src={process.env.PUBLIC_URL + '/assets/icons/logo.svg'}
          alt="logo"
        />
      </Link>
      <div className={styles.content}>
        <a
          href={googleMaps}
          target="_blank"
          className={styles.address}
          rel="noreferrer"
        >
          {address.city} {address.street}
        </a>
        <a href={`tel:${phoneNumber}`} className={styles.address}>
          {phoneNumber}
        </a>
          <a href={socialNetworks[0].link} className={styles.phone}>
             Instagram
          </a>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
