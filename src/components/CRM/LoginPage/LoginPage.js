import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';

import { loginInitiate } from '../../../redux/actions/authActions';
import Spinner from '../../Common/Spinner/Spinner';
import styles from './LoginPage.module.scss';

export default function LoginPage() {
  let history = useHistory();
  let dispatch = useDispatch();
  const { user, userData, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && userData?.role === 'ADMIN') {
      history.push('/admin');
    } else if (user && userData?.role === 'USER') {
      history.push('/customer');
    }
  }, [history, user, userData?.role]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email().required('Це поле є обов`язковим.'),
              password: Yup.string().required('Це поле є обов`язковим.'),
            })}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              actions.resetForm();
              dispatch(loginInitiate(values.email, values.password));
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <Card color="primary" className={styles.form}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Увійти
                    </Typography>

                    {error?.login ? (
                      <FormHelperText error={true}>
                        {error.login}
                      </FormHelperText>
                    ) : null}

                    <div className={styles.inputsBlock}>
                      <TextField
                        id="email"
                        {...formik.getFieldProps('email')}
                        className={styles.emailInput}
                        label="Електронна пошта"
                        variant="outlined"
                        color="primary"
                        size="small"
                        error={
                          formik.touched.email && formik.errors.email
                            ? true
                            : false
                        }
                        helperText={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : null
                        }
                      />

                      <TextField
                        id="password"
                        {...formik.getFieldProps('password')}
                        className={styles.passwordInput}
                        label="Пароль"
                        variant="outlined"
                        type="password"
                        size="small"
                        error={
                          formik.touched.password && formik.errors.password
                            ? true
                            : false
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : null
                        }
                      />
                    </div>
                    <FormHelperText className={styles.textHelper}>
                      Немає облікового запису?
                      <Link
                        to="/registration"
                        className={styles.textHelper__innerLink}
                      >
                        Створіть його!
                      </Link>
                    </FormHelperText>

                    <FormHelperText className={styles.textHelper}>
                      <Link to="/login">Забули пароль?</Link>
                    </FormHelperText>
                  </CardContent>

                  <div className={styles.submitButton}>
                    <Button
                      disabled={!formik.isValid}
                      size="small"
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      Надіслати
                    </Button>
                  </div>
                </Card>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
