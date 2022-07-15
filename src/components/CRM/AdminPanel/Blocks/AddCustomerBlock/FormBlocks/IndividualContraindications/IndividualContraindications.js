import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { individualContraindicationsAdded } from '../../../../../../../redux/actions/customerActions';
import {
  INDIVIDUAL_CONTRAINDICATIONS,
  CARDIOVASCULAR_DISEASE,
  GASTROINTESTINAL_TRACT_DISEASES,
  ENDOCRINOLOGY,
  OTHER_CONDITIONS,
  STATE_AFTER,
} from '../../../../Common/Constants/IndividualContraindicationsConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { CheckboxesCustomeTheme, FormBlockCustomeTheme } from '../../MuiThemes.js';
import styles from './IndividualContraindications.module.scss';
import { IndividualContraindicationsInitialValues } from './InitialValues';

export default function IndividualContraindications() {
  let dispatch = useDispatch();

  const [individualContraindications, setIndividualContraindications] = useState({});
  const [
    isLocalIndividualContraindicationsSaved,
    setLocalIndividualContraindicationsSaved,
  ] = useState(false);
  const [
    isStoredIndividualContraindicationsSaved,
    setStoredIndividualContraindicationsSaved,
  ] = useState(false);

  const individualContraindicationsFromState = useSelector((state) => state.customer.individualContraindications);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setIndividualContraindications({ ...individualContraindicationsFromState });
    setStoredIndividualContraindicationsSaved(!isEmpty(individualContraindicationsFromState));
  }, [individualContraindicationsFromState])


  const handleEdit = () => {
    setLocalIndividualContraindicationsSaved(false)
    setStoredIndividualContraindicationsSaved(false)
  }

  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved ?
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
          initialValues={isEmpty(individualContraindicationsFromState) ? IndividualContraindicationsInitialValues : individualContraindicationsFromState}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            setLocalIndividualContraindicationsSaved(true);
            dispatch(individualContraindicationsAdded({ ...individualContraindications }));
          }}
        >
          {(formik) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                    disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                  >
                    <Chip
                      label={
                        INDIVIDUAL_CONTRAINDICATIONS.cardiovascularDisease + ':'
                      }
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cardiovascularDisease.hypertensiveDisease"
                            name={'cardiovascularDisease.hypertensiveDisease'}
                            {...formik.getFieldProps(
                              'cardiovascularDisease.hypertensiveDisease'
                            )}
                            checked={
                              formik.values.cardiovascularDisease
                                .hypertensiveDisease
                            }
                          />
                        }
                        label={CARDIOVASCULAR_DISEASE.hypertensiveDisease}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cardiovascularDisease.stroke"
                            name={'cardiovascularDisease.stroke'}
                            {...formik.getFieldProps(
                              'cardiovascularDisease.stroke'
                            )}
                            checked={formik.values.cardiovascularDisease.stroke}
                          />
                        }
                        label={CARDIOVASCULAR_DISEASE.stroke}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cardiovascularDisease.infarct"
                            name={'cardiovascularDisease.infarct'}
                            {...formik.getFieldProps(
                              'cardiovascularDisease.infarct'
                            )}
                            checked={formik.values.cardiovascularDisease.infarct}
                          />
                        }
                        label={CARDIOVASCULAR_DISEASE.infarct}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cardiovascularDisease.pacemakerPresence"
                            name={'cardiovascularDisease.pacemakerPresence'}
                            {...formik.getFieldProps(
                              'cardiovascularDisease.pacemakerPresence'
                            )}
                            checked={
                              formik.values.cardiovascularDisease
                                .pacemakerPresence
                            }
                          />
                        }
                        label={CARDIOVASCULAR_DISEASE.pacemakerPresence}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="cardiovascularDisease.phlebitisPhlebosisThrombosis"
                            name={
                              'cardiovascularDisease.phlebitisPhlebosisThrombosis'
                            }
                            {...formik.getFieldProps(
                              'cardiovascularDisease.phlebitisPhlebosisThrombosis'
                            )}
                            checked={
                              formik.values.cardiovascularDisease
                                .phlebitisPhlebosisThrombosis
                            }
                          />
                        }
                        label={
                          CARDIOVASCULAR_DISEASE.phlebitisPhlebosisThrombosis
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
              </div>

              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                    disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                  >
                    <Chip
                      label={
                        INDIVIDUAL_CONTRAINDICATIONS.gastrointestinalTractDiseases +
                        ':'
                      }
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="gastrointestinalTractDiseases.liverDisease"
                            name={'gastrointestinalTractDiseases.liverDisease'}
                            {...formik.getFieldProps(
                              'gastrointestinalTractDiseases.liverDisease'
                            )}
                            checked={
                              formik.values.gastrointestinalTractDiseases
                                .liverDisease
                            }
                          />
                        }
                        label={GASTROINTESTINAL_TRACT_DISEASES.liverDisease}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="gastrointestinalTractDiseases.gallbladderDisease"
                            name={
                              'gastrointestinalTractDiseases.gallbladderDisease'
                            }
                            {...formik.getFieldProps(
                              'gastrointestinalTractDiseases.gallbladderDisease'
                            )}
                            checked={
                              formik.values.gastrointestinalTractDiseases
                                .gallbladderDisease
                            }
                          />
                        }
                        label={GASTROINTESTINAL_TRACT_DISEASES.gallbladderDisease}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
              </div>

              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                    disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                  >
                    <Chip
                      label={INDIVIDUAL_CONTRAINDICATIONS.endocrinology + ':'}
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="endocrinology.thyroidDisease"
                            name={'endocrinology.thyroidDisease'}
                            {...formik.getFieldProps(
                              'endocrinology.thyroidDisease'
                            )}
                            checked={formik.values.endocrinology.thyroidDisease}
                          />
                        }
                        label={ENDOCRINOLOGY.thyroidDisease}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="endocrinology.diabetes"
                            name={'endocrinology.diabetes'}
                            {...formik.getFieldProps('endocrinology.diabetes')}
                            checked={formik.values.endocrinology.diabetes}
                          />
                        }
                        label={ENDOCRINOLOGY.diabetes}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
              </div>

              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                    disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                  >
                    <Chip
                      label={INDIVIDUAL_CONTRAINDICATIONS.otherConditions + ':'}
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.herpes"
                            name={'otherConditions.herpes'}
                            {...formik.getFieldProps('otherConditions.herpes')}
                            checked={formik.values.otherConditions.herpes}
                          />
                        }
                        label={OTHER_CONDITIONS.herpes}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.OX"
                            name={'otherConditions.OX'}
                            {...formik.getFieldProps('otherConditions.OX')}
                            checked={formik.values.otherConditions.OX}
                          />
                        }
                        label={OTHER_CONDITIONS.OX}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.hepatitis"
                            name={'otherConditions.hepatitis'}
                            {...formik.getFieldProps('otherConditions.hepatitis')}
                            checked={formik.values.otherConditions.hepatitis}
                          />
                        }
                        label={OTHER_CONDITIONS.hepatitis}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.tuberculosis"
                            name={'otherConditions.tuberculosis'}
                            {...formik.getFieldProps(
                              'otherConditions.tuberculosis'
                            )}
                            checked={formik.values.otherConditions.tuberculosis}
                          />
                        }
                        label={OTHER_CONDITIONS.tuberculosis}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.syphilis"
                            name={'otherConditions.syphilis'}
                            {...formik.getFieldProps('otherConditions.syphilis')}
                            checked={formik.values.otherConditions.syphilis}
                          />
                        }
                        label={OTHER_CONDITIONS.syphilis}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.epilepsy"
                            name={'otherConditions.epilepsy'}
                            {...formik.getFieldProps('otherConditions.epilepsy')}
                            checked={formik.values.otherConditions.epilepsy}
                          />
                        }
                        label={OTHER_CONDITIONS.epilepsy}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.oncology"
                            name={'otherConditions.oncology'}
                            {...formik.getFieldProps('otherConditions.oncology')}
                            checked={formik.values.otherConditions.oncology}
                          />
                        }
                        label={OTHER_CONDITIONS.oncology}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.kidneyDisease"
                            name={'otherConditions.kidneyDisease'}
                            {...formik.getFieldProps(
                              'otherConditions.kidneyDisease'
                            )}
                            checked={formik.values.otherConditions.kidneyDisease}
                          />
                        }
                        label={OTHER_CONDITIONS.kidneyDisease}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.edemaPredisposition"
                            name={'otherConditions.edemaPredisposition'}
                            {...formik.getFieldProps(
                              'otherConditions.edemaPredisposition'
                            )}
                            checked={
                              formik.values.otherConditions.edemaPredisposition
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.edemaPredisposition}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.bruisingPredisposition"
                            name={'otherConditions.bruisingPredisposition'}
                            {...formik.getFieldProps(
                              'otherConditions.bruisingPredisposition'
                            )}
                            checked={
                              formik.values.otherConditions.bruisingPredisposition
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.bruisingPredisposition}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.asthma"
                            name={'otherConditions.asthma'}
                            {...formik.getFieldProps('otherConditions.asthma')}
                            checked={formik.values.otherConditions.asthma}
                          />
                        }
                        label={OTHER_CONDITIONS.asthma}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.birthControlPills"
                            name={'otherConditions.birthControlPills'}
                            {...formik.getFieldProps(
                              'otherConditions.birthControlPills'
                            )}
                            checked={
                              formik.values.otherConditions.birthControlPills
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.birthControlPills}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.neoplasm"
                            name={'otherConditions.neoplasm'}
                            {...formik.getFieldProps('otherConditions.neoplasm')}
                            checked={formik.values.otherConditions.neoplasm}
                          />
                        }
                        label={OTHER_CONDITIONS.neoplasm}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.demodicosis"
                            name={'otherConditions.demodicosis'}
                            {...formik.getFieldProps(
                              'otherConditions.demodicosis'
                            )}
                            checked={formik.values.otherConditions.demodicosis}
                          />
                        }
                        label={OTHER_CONDITIONS.demodicosis}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.exacerbationOfChronicDiseases"
                            name={'otherConditions.exacerbationOfChronicDiseases'}
                            {...formik.getFieldProps(
                              'otherConditions.exacerbationOfChronicDiseases'
                            )}
                            checked={
                              formik.values.otherConditions
                                .exacerbationOfChronicDiseases
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.exacerbationOfChronicDiseases}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.increaseBodyTemperature"
                            name={'otherConditions.increaseBodyTemperature'}
                            {...formik.getFieldProps(
                              'otherConditions.increaseBodyTemperature'
                            )}
                            checked={
                              formik.values.otherConditions
                                .increaseBodyTemperature
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.increaseBodyTemperature}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.psoriasis"
                            name={'otherConditions.psoriasis'}
                            {...formik.getFieldProps('otherConditions.psoriasis')}
                            checked={formik.values.otherConditions.psoriasis}
                          />
                        }
                        label={OTHER_CONDITIONS.psoriasis}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.pregnancyAndLactation"
                            name={'otherConditions.pregnancyAndLactation'}
                            {...formik.getFieldProps(
                              'otherConditions.pregnancyAndLactation'
                            )}
                            checked={
                              formik.values.otherConditions.pregnancyAndLactation
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.pregnancyAndLactation}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.beautyInjections"
                            name={'otherConditions.beautyInjections'}
                            {...formik.getFieldProps(
                              'otherConditions.beautyInjections'
                            )}
                            checked={
                              formik.values.otherConditions.beautyInjections
                            }
                          />
                        }
                        label={OTHER_CONDITIONS.beautyInjections}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="otherConditions.metalImplants"
                            name={'otherConditions.metalImplants'}
                            {...formik.getFieldProps(
                              'otherConditions.metalImplants'
                            )}
                            checked={formik.values.otherConditions.metalImplants}
                          />
                        }
                        label={OTHER_CONDITIONS.metalImplants}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
              </div>

              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                    disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                  >
                    <Chip label={INDIVIDUAL_CONTRAINDICATIONS.stateAfter + ':'} />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="stateAfter.operations"
                            name={'stateAfter.operations'}
                            {...formik.getFieldProps('stateAfter.operations')}
                            checked={formik.values.stateAfter.operations}
                          />
                        }
                        label={STATE_AFTER.operations}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="stateAfter.laserGrinding"
                            name={'stateAfter.laserGrinding'}
                            {...formik.getFieldProps('stateAfter.laserGrinding')}
                            checked={formik.values.stateAfter.laserGrinding}
                          />
                        }
                        label={STATE_AFTER.laserGrinding}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="stateAfter.deepPeels"
                            name={'stateAfter.deepPeels'}
                            {...formik.getFieldProps('stateAfter.deepPeels')}
                            checked={formik.values.stateAfter.deepPeels}
                          />
                        }
                        label={STATE_AFTER.deepPeels}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
              </div>

              <div className={styles.additionalCommentWrapper}>
                <TextField
                  id="lastMedication"
                  {...formik.getFieldProps('lastMedication')}
                  label={INDIVIDUAL_CONTRAINDICATIONS.lastMedication}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                />
              </div>

              <div className={styles.additionalCommentWrapper}>
                <TextField
                  id="comment"
                  {...formik.getFieldProps('comment')}
                  label={INDIVIDUAL_CONTRAINDICATIONS.comment}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                />
              </div>

              <div className={styles.buttonsBlock}>
                <ButtonsBar
                  handleSave={() => {
                    formik.handleSubmit();
                    setIndividualContraindications(formik.values);
                  }}
                  handleClose={() => {
                    formik.resetForm();
                    setLocalIndividualContraindicationsSaved(false);

                    setStoredIndividualContraindicationsSaved(false);
                    setIndividualContraindications({});
                    dispatch(
                      individualContraindicationsAdded({})
                    );
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved}
                />
              </div>
              {isLocalIndividualContraindicationsSaved || isStoredIndividualContraindicationsSaved ? <div className={styles.editButton}>
                <ButtonsBar
                  handleSave={() => handleEdit()}
                  saveButtonName="Редагувати"
                />
              </div> : null}
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
