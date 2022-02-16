import React from 'react';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { ADDITIONAL_RECOMENDATIONS } from '../../../../Common/Constants/AdditionalRecommendationsConstants';
import { AdditionalRecommendationsInitialValues } from './InitialValues';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import styles from './AdditionalRecommendations.module.scss';
import { FormBlockCustomeTheme } from '../../MuiThemes.js';

export default function AdditionalRecommendations() {
  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        <Formik
          initialValues={AdditionalRecommendationsInitialValues}
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
                  id="diet"
                  {...formik.getFieldProps('diet')}
                  label={ADDITIONAL_RECOMENDATIONS.diet}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="drinkingRegime"
                  {...formik.getFieldProps('drinkingRegime')}
                  label={ADDITIONAL_RECOMENDATIONS.drinkingRegime}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="medicalConsultation"
                  {...formik.getFieldProps('medicalConsultation')}
                  label={ADDITIONAL_RECOMENDATIONS.medicalConsultation}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="vitaminsSupplements"
                  {...formik.getFieldProps('vitaminsSupplements')}
                  label={ADDITIONAL_RECOMENDATIONS.vitaminsSupplements}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />

                <TextField
                  id="generalRecommendations"
                  {...formik.getFieldProps('generalRecommendations')}
                  label={ADDITIONAL_RECOMENDATIONS.generalRecommendations}
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
