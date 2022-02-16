import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';

import { logoutInitiate } from '../../../redux/actions/authActions';
import CONTACT_INFORMATION from '../../../data/ContactInformation';
import AlertDialog from '../AlertDialog/AlertDialog';
import styles from './Header.module.scss';

export default function Header() {
  const { address, googleMaps, phoneNumber } = CONTACT_INFORMATION;

  const [isUserAuthorized, setUserAuthorized] = useState(false);
  const { user, userData } = useSelector((state) => state.auth);

  let history = useHistory();
  let dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutInitiate());
    history.push('/');
    return;
  };

  useEffect(() => {
    if (user !== null) {
      setUserAuthorized(true);
    } else {
      setUserAuthorized(false);
    }
  }, [user]);

  const renderAuthButtons = () => {
    if (!isUserAuthorized) {
      return (
        <>
          <Link to="/admin" className={styles.leftButton}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Увійти
            </Button>
          </Link>
          <Link to="/registration">
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              Зареєструватися
            </Button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to={userData?.role === 'ADMIN' ? '/admin' : userData?.role === 'USER' ? '/customer' : '/' } className={styles.leftButton}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Мій кабінет
            </Button>
          </Link>
          <AlertDialog
            buttonTitle="Вийти"
            dialogTitle="Вихід"
            dialogContentText={`Ви впевнені, що хочете вийти із облікового запису ${userData?.email}?`}
            trueButtonText="Вийти"
            trueButtonAction={handleLogout}
            falseButtonText="Залишитися"
          />
        </>
      );
    }
  };

  return (
    <div className={styles.wrap}>
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
          <a href={`tel:${phoneNumber}`} className={styles.phone}>
            {phoneNumber}
          </a>
        </div>
        <div className={styles.authButtons}>{renderAuthButtons()}</div>
      </div>
    </div>
  );
}
