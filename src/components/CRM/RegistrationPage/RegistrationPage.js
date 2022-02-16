import React, { useEffect } from 'react';
import * as Yup from 'yup';
import 'yup-phone';
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

import { registerInitiate } from '../../../redux/actions/authActions';
import Spinner from '../../Common/Spinner/Spinner';
import styles from './RegistrationPage.module.scss';

export default function RegistrationPage() {
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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            fatherName: '',
            phone: '',
            email: '',
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Це поле є обов`язковим.'),
            lastName: Yup.string().required('Це поле є обов`язковим.'),
            fatherName: Yup.string().required('Це поле є обов`язковим.'),
            phone: Yup.string().required('Це поле є обов`язковим.'),
            // .phone(undefined, undefined, 'Номер телефону повин відповідати прикладу: +380111111111.'),
            email: Yup.string()
              .email('Електронна пошта повинна відповідати прикладу: example@example.com')
              .required('Це поле є обов`язковим.'),
            password: Yup.string()
              .required('Це поле є обов`язковим.')
              .min(3, 'Пароль повинен включати, щонаймеше 3 символи.')
              // .matches(/(?=.*[0-9])/, 'Пароль повинен містити цифру.')
              // .matches(/(?=.*[A-Z])/, 'Пароль повинен містити велику літеру.')
              // .matches(/(?=.*[a-z])/, 'Пароль повинен містити малу літеру.')
              .max(32, 'Пароль повинен включати не більше ніж 32 символи.'),
            passwordConfirmation: Yup.string()
              .required('Це поле є обов`язковим.')
              .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати.'),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            actions.resetForm();
            const { email, password, firstName, lastName, fatherName, phone } = values;
            const userData = { email, password, firstName, lastName, fatherName, phone };
            dispatch(registerInitiate(userData));
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Card className={styles.form}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Зареєструватися
                  </Typography>

                  {error?.register ? <FormHelperText error={true}>{error.register}</FormHelperText> : null}

                  <div className={styles.inputsBlock}>
                    <TextField
                      id="lastName"
                      {...formik.getFieldProps('lastName')}
                      className={styles.lastNameInput}
                      label="Прізвище"
                      variant="outlined"
                      size="small"
                      error={formik.touched.lastName && formik.errors.lastName ? true : false}
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                          ? formik.errors.lastName
                          : null
                      }
                    />
                    <TextField
                      id="firstName"
                      {...formik.getFieldProps('firstName')}
                      className={styles.firstNameInput}
                      label="Ім'я"
                      variant="outlined"
                      size="small"
                      error={formik.touched.firstName && formik.errors.firstName ? true : false}
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                          ? formik.errors.firstName
                          : null
                      }
                    />
                    <TextField
                      id="fatherName"
                      {...formik.getFieldProps('fatherName')}
                      className={styles.fatherNameInput}
                      label="Побатькові"
                      variant="outlined"
                      size="small"
                      error={formik.touched.fatherName && formik.errors.fatherName ? true : false}
                      helperText={
                        formik.touched.fatherName && formik.errors.fatherName
                          ? formik.errors.fatherName
                          : null
                      }
                    />
                    <TextField
                                            id="phone"
                      {...formik.getFieldProps('phone')}
                      className={styles.phoneInput}
                      label="Номер телефону"
                      variant="outlined"
                      size="small"
                      error={formik.touched.phone && formik.errors.phone ? true : false}
                      helperText={
                        formik.touched.phone && formik.errors.phone ? formik.errors.phone : null
                      }
                    />
                    <TextField
                      id="email"
                      {...formik.getFieldProps('email')}
                      className={styles.emailInput}
                      label="Електронна пошта"
                      variant="outlined"
                      size="small"
                      error={formik.touched.email && formik.errors.email ? true : false}
                      helperText={
                        formik.touched.email && formik.errors.email ? formik.errors.email : null
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
                      error={formik.touched.password && formik.errors.password ? true : false}
                      helperText={
                        formik.touched.password && formik.errors.password
                          ? formik.errors.password
                          : null
                      }
                    />
                    
                    <TextField
                      id="passwordConfirmation"
                      {...formik.getFieldProps('passwordConfirmation')}
                      className={styles.passwordConfirmationInput}
                      label="Підтвердження паролю"
                      variant="outlined"
                      type="password"
                      size="small"
                      error={
                        formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
                          ? true
                          : false
                      }
                      helperText={
                        formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
                          ? formik.errors.passwordConfirmation
                          : null
                      }
                    />
                  </div>

                  <FormHelperText className={styles.textHelper} >Вже маєте обліковий запис? 
                       <Link to="/login">
                       Увійдіть!
                       </Link>
                       </FormHelperText>

                </CardContent>

                <div className={styles.submitButton}>
                  <Button
                    disabled={!formik.isValid}
                    size="small"
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={styles.submitButton__item}
                  >
                    Надіслати
                  </Button>
                  
                </div>
              </Card>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
}
