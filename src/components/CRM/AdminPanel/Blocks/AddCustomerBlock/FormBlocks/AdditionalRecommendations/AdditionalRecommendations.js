import React, { useState } from 'react';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { ADDITIONAL_RECOMENDATIONS } from '../../../../Common/Constants/AdditionalRecommendationsConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import { FormBlockCustomeTheme } from '../../MuiThemes.js';
import { AdditionalRecommendationsInitialValues } from './InitialValues';
import styles from './AdditionalRecommendations.module.scss';

export default function AdditionalRecommendations() {
  const [isAdditionalRecommendationsSaved, setAdditionalRecommendationsSaved] =
    useState(false);
  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isAdditionalRecommendationsSaved ? (
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
          />
        ) : null}
        <Formik
          initialValues={AdditionalRecommendationsInitialValues}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
           setAdditionalRecommendationsSaved(true);
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
                  handleSave={() => formik.handleSubmit()}
                  handleClose={() => {
                    formik.resetForm();
                    setAdditionalRecommendationsSaved(false);
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isAdditionalRecommendationsSaved}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
