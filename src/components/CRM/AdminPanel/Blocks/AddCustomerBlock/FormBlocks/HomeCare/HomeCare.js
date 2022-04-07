import React, { useState } from 'react';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { HOME_CARE } from '../../../../Common/Constants/HomeCareConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme } from '../../MuiThemes.js';
import { HomeCareInitialValues } from './InitialValues';
import styles from './HomeCare.module.scss';

export default function HomeCare() {
  const [isHomeCareSaved, setHomeCareSaved] =
    useState(false);
  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isHomeCareSaved ? (
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
          />
        ) : null}
        <Formik
          initialValues={HomeCareInitialValues}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            setHomeCareSaved(true);
            console.log(values);
          }}
        >
          {(formik) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className={styles.inputsWrapper}>
                <TextField
                  id="cleaning"
                  {...formik.getFieldProps('cleaning')}
                  label={HOME_CARE.cleaning}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="toning"
                  {...formik.getFieldProps('toning')}
                  label={HOME_CARE.toning}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="basicCare"
                  {...formik.getFieldProps('basicCare')}
                  label={HOME_CARE.basicCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="dayCare"
                  {...formik.getFieldProps('dayCare')}
                  label={HOME_CARE.dayCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="nightCare"
                  {...formik.getFieldProps('nightCare')}
                  label={HOME_CARE.nightCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="intensiveCare"
                  {...formik.getFieldProps('intensiveCare')}
                  label={HOME_CARE.intensiveCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
              </div>

              <div className={styles.buttonsBlock}>
                <ButtonsBar
                  handleSave={() => formik.handleSubmit()}
                  handleClose={() => {
                    formik.resetForm();
                    setHomeCareSaved(false);
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isHomeCareSaved}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
