import React from 'react';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import {
  HOME_CARE_RECOMENDATIONS
} from '../../../../Common/Constants/HomeCareRecommendationsConstants';
import {
  HomeCareRecommendationsInitialValues,

} from './InitialValues';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import styles from './HomeCareRecommendations.module.scss';
import {
  FormBlockCustomeTheme,
} from '../../MuiThemes.js';

export default function HomeCareRecommendations() {

  return (
      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div>
          <Formik
            initialValues={HomeCareRecommendationsInitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              actions.resetForm();
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
                    label={HOME_CARE_RECOMENDATIONS.cleaning}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="toning"
                    {...formik.getFieldProps('toning')}
                    label={HOME_CARE_RECOMENDATIONS.toning}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="basicCare"
                    {...formik.getFieldProps('basicCare')}
                    label={HOME_CARE_RECOMENDATIONS.basicCare}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="dayCare"
                    {...formik.getFieldProps('dayCare')}
                    label={HOME_CARE_RECOMENDATIONS.dayCare}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="nightCare"
                    {...formik.getFieldProps('nightCare')}
                    label={HOME_CARE_RECOMENDATIONS.nightCare}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="intensiveCare"
                    {...formik.getFieldProps('intensiveCare')}
                    label={HOME_CARE_RECOMENDATIONS.intensiveCare}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                 
                </div>

                <div className={styles.buttonsBlock}>
                  <ButtonsBar
                    handleSave={() => console.log('Save')}
                    handleClose={() => formik.resetForm()}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={!formik.isValid}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>

  );
}
