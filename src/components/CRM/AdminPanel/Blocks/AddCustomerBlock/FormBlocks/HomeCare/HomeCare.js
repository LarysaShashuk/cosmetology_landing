import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { homeCareAdded } from '../../../../../../../redux/actions/customerActions';
import { HOME_CARE } from '../../../../Common/Constants/HomeCareConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme } from '../../MuiThemes.js';
import { HomeCareInitialValues } from './InitialValues';
import styles from './HomeCare.module.scss';

export default function HomeCare() {
  let dispatch = useDispatch();

  const [homeCare, setHomeCare] = useState({});
  const [isHomeCareLocalSaved, setHomeCareLocalSaved] =
    useState(false);
  const [isHomeCareStoredSaved, setHomeCareStoredSaved] =
    useState(false);

  const homeCareFromState = useSelector((state) => state.customer.homeCare);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setHomeCare({ ...homeCareFromState })
    setHomeCareStoredSaved(!isEmpty(homeCareFromState))
  }, [homeCareFromState])

  const handleHomeCareEdit = () => {
    setHomeCareLocalSaved(false)
    setHomeCareStoredSaved(false)
  }


  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isHomeCareLocalSaved || isHomeCareStoredSaved ?
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
          initialValues={isEmpty(homeCareFromState) ? HomeCareInitialValues : homeCareFromState}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            setHomeCareLocalSaved(true);
            dispatch(homeCareAdded({ ...homeCare }))
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
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}
                />

                <TextField
                  id="toning"
                  {...formik.getFieldProps('toning')}
                  label={HOME_CARE.toning}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}

                />

                <TextField
                  id="basicCare"
                  {...formik.getFieldProps('basicCare')}
                  label={HOME_CARE.basicCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}

                />

                <TextField
                  id="dayCare"
                  {...formik.getFieldProps('dayCare')}
                  label={HOME_CARE.dayCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}

                />

                <TextField
                  id="nightCare"
                  {...formik.getFieldProps('nightCare')}
                  label={HOME_CARE.nightCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}

                />

                <TextField
                  id="intensiveCare"
                  {...formik.getFieldProps('intensiveCare')}
                  label={HOME_CARE.intensiveCare}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}

                />
              </div>

              <div>
                <ButtonsBar
                  handleSave={() => {
                    formik.handleSubmit();
                    setHomeCare(formik.values);
                  }}
                  handleClose={() => {
                    formik.resetForm();
                    setHomeCareLocalSaved(false);
                    setHomeCareStoredSaved(false);
                    setHomeCare({});
                    dispatch(homeCareAdded({}))
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isHomeCareLocalSaved || isHomeCareStoredSaved}
                />
              </div>

              {isHomeCareLocalSaved || isHomeCareStoredSaved
                ? <div className={styles.editButton}>
                  <ButtonsBar
                    handleSave={() => handleHomeCareEdit()}
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
