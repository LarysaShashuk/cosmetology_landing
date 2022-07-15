import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';


import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { additionalRecommendationsAdded } from '../../../../../../../redux/actions/customerActions';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { ADDITIONAL_RECOMENDATIONS } from '../../../../Common/Constants/AdditionalRecommendationsConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import { FormBlockCustomeTheme } from '../../MuiThemes.js';
import { AdditionalRecommendationsInitialValues } from './InitialValues';
import styles from './AdditionalRecommendations.module.scss';

export default function AdditionalRecommendations() {
  let dispatch = useDispatch();

  const [additionalRecommendations, setAdditionalRecommendations] = useState({});
  const [isAdditionalRecommendationsLocalSaved, setAdditionalRecommendationsLocalSaved] =
    useState(false);
  const [isAdditionalRecommendationsStoredSaved, setAdditionalRecommendationsStoredSaved] =
    useState(false);

  const additionalRecommendationsFromState = useSelector((state) => state.customer.additionalRecommendations);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setAdditionalRecommendations({ ...additionalRecommendationsFromState })
    setAdditionalRecommendationsStoredSaved(!isEmpty(additionalRecommendationsFromState))
  }, [additionalRecommendationsFromState])

  const handleAdditionalRecommendationsEdit = () => {
    setAdditionalRecommendationsLocalSaved(false)
    setAdditionalRecommendationsStoredSaved(false)
  }


  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved ?
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
            severity="success"
          />
          : <CustomeAlert
            title="Не заповнено"
            message="Ця частина форма не є обов'язковою."
            severity="info"
          />}
        <Formik
          initialValues={isEmpty(additionalRecommendationsFromState) ? AdditionalRecommendationsInitialValues : additionalRecommendationsFromState}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            setAdditionalRecommendationsLocalSaved(true);
            dispatch(additionalRecommendationsAdded({ ...additionalRecommendations }))
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
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />

                <TextField
                  id="drinkingRegime"
                  {...formik.getFieldProps('drinkingRegime')}
                  label={ADDITIONAL_RECOMENDATIONS.drinkingRegime}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />

                <TextField
                  id="medicalConsultation"
                  {...formik.getFieldProps('medicalConsultation')}
                  label={ADDITIONAL_RECOMENDATIONS.medicalConsultation}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />

                <TextField
                  id="vitaminsSupplements"
                  {...formik.getFieldProps('vitaminsSupplements')}
                  label={ADDITIONAL_RECOMENDATIONS.vitaminsSupplements}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />

                <TextField
                  id="generalRecommendations"
                  {...formik.getFieldProps('generalRecommendations')}
                  label={ADDITIONAL_RECOMENDATIONS.generalRecommendations}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />
              </div>

              <div>
                <ButtonsBar
                  handleSave={() => {
                    formik.handleSubmit();
                    setAdditionalRecommendations(formik.values);
                  }}
                  handleClose={() => {
                    formik.resetForm();
                    setAdditionalRecommendationsLocalSaved(false);
                    setAdditionalRecommendationsStoredSaved(false);
                    setAdditionalRecommendations({});
                    dispatch(additionalRecommendationsAdded({}));
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved}
                />
              </div>

              {isAdditionalRecommendationsLocalSaved || isAdditionalRecommendationsStoredSaved
                ? <div className={styles.editButton}>
                  <ButtonsBar
                    handleSave={() => handleAdditionalRecommendationsEdit()}
                    saveButtonName="Редагувати"
                  />
                </div> : null
              }
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
