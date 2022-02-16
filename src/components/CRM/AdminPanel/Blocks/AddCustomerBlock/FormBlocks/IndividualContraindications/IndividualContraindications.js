import React from 'react';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {
  INDIVIDUAL_CONTRAINDICATIONS,
  CARDIOVASCULAR_DISEASE,
  GASTROINTESTINAL_TRACT_DISEASES,
  ENDOCRINOLOGY,
  OTHER_CONDITIONS,
  STATE_AFTER,
} from '../../../../Common/Constants/IndividualContraindicationsConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import { CheckboxesCustomeTheme } from '../../MuiThemes.js';
import styles from './IndividualContraindications.module.scss';
import { IndividualContraindicationsInitialValues } from './InitialValues';

export default function IndividualContraindications() {
  return (
    <div>
      <Formik
        initialValues={IndividualContraindicationsInitialValues}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          // actions.resetForm();
          console.log(values);
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
                        />
                      }
                      label={
                        CARDIOVASCULAR_DISEASE.phlebitisPhlebosisThrombosis
                      }
                    />
                  </FormGroup>
                </FormControl>
              </ThemeProvider>

              <TextField
                id="cardiovascularDisease.comment"
                {...formik.getFieldProps('cardiovascularDisease.comment')}
                label={CARDIOVASCULAR_DISEASE.comment}
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>

            <div className={styles.checkboxesWrapper}>
              <ThemeProvider theme={CheckboxesCustomeTheme}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
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
                        />
                      }
                      label={GASTROINTESTINAL_TRACT_DISEASES.gallbladderDisease}
                    />
                  </FormGroup>
                </FormControl>
              </ThemeProvider>

              <TextField
                id="gastrointestinalTractDiseases.comment"
                {...formik.getFieldProps(
                  'gastrointestinalTractDiseases.comment'
                )}
                label={GASTROINTESTINAL_TRACT_DISEASES.comment}
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>

            <div className={styles.checkboxesWrapper}>
              <ThemeProvider theme={CheckboxesCustomeTheme}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
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
                        />
                      }
                      label={ENDOCRINOLOGY.diabetes}
                    />
                  </FormGroup>
                </FormControl>
              </ThemeProvider>

              <TextField
                id="endocrinology.comment"
                {...formik.getFieldProps('endocrinology.comment')}
                label={ENDOCRINOLOGY.comment}
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>

            <div className={styles.checkboxesWrapper}>
              <ThemeProvider theme={CheckboxesCustomeTheme}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
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
                        />
                      }
                      label={OTHER_CONDITIONS.metalImplants}
                    />
                  </FormGroup>
                </FormControl>
              </ThemeProvider>

              <TextField
                id="otherConditions.comment"
                {...formik.getFieldProps('otherConditions.comment')}
                label={OTHER_CONDITIONS.comment}
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>

            <div className={styles.checkboxesWrapper}>
              <ThemeProvider theme={CheckboxesCustomeTheme}>
                <FormControl
                  sx={{ m: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <Chip label={INDIVIDUAL_CONTRAINDICATIONS.stateAfter + ':'} />
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="stateAfter.operations"
                          name={'stateAfter.operations'}
                          {...formik.getFieldProps('stateAfter.operations')}
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
                        />
                      }
                      label={STATE_AFTER.deepPeels}
                    />
                  </FormGroup>
                </FormControl>
              </ThemeProvider>

              <TextField
                id="stateAfter.comment"
                {...formik.getFieldProps('stateAfter.comment')}
                label={STATE_AFTER.comment}
                variant="outlined"
                color="primary"
                size="small"
              />
            </div>

            <div className={styles.additionalCommentWrapper}>
              <TextField
                id="lastMedication"
                {...formik.getFieldProps('lastMedication')}
                label={INDIVIDUAL_CONTRAINDICATIONS.lastMedication}
                variant="outlined"
                color="primary"
                size="medium"
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
              />
            </div>

            <div className={styles.buttonsBlock}>
              <ButtonsBar
                handleSave={() => formik.handleSubmit()}
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
  );
}
