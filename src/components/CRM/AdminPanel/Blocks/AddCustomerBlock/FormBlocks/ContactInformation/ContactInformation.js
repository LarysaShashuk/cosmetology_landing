import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ChipsStack from '../../../../ActionPanel/ChipsStack/ChipsStack';

import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import {
  CONTACT_INFORMATION,
  SKIN_TYPE, SKIN_CONDITION, ALLERGIC_REACTIONS, MORPHOTYPE
} from '../../../../Common/Constants/ContactInformationConstants';
import {
  FormBlockCustomeTheme,
  CheckboxesCustomeTheme,
} from '../../MuiThemes.js';
import styles from './ContactInformation.module.scss';
import { ContactInformationInitialValues } from './InitialValues';

export default function ContactInformation() {
  const [tags, setTags] = useState([]);

  const handleChipDeleting = (chip) => {
  
  setTags(tags.filter((tag) =>  tag !== chip ))
  
  }

  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        <Formik
          initialValues={ContactInformationInitialValues}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Це поле є обов`язковим.'),
            lastName: Yup.string().required('Це поле є обов`язковим.'),
            phone: Yup.string().required('Це поле є обов`язковим.'),
            // .phone(undefined, undefined, 'Номер телефону повин відповідати прикладу: +380111111111.'),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            // actions.resetForm();
            console.log(values);
          }}
        >
          {(formik) => (
            <form onSubmit={(e) => {
                e.preventDefault();
              }}>
              <div className={styles.inputsWrapper}>
                <TextField
                  id="lastName"
                  {...formik.getFieldProps('lastName')}
                  label={CONTACT_INFORMATION.lastName}
                  variant="outlined"
                  type="lastName"
                  size="medium"
                  error={
                    formik.touched.lastName && formik.errors.lastName
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : null
                  }
                />
                <TextField
                  id="firstName"
                  {...formik.getFieldProps('firstName')}
                  label={CONTACT_INFORMATION.firstName}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  error={
                    formik.touched.firstName && formik.errors.firstName
                      ? true
                      : false
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : null
                  }
                />
                <TextField
                  id="fatherName"
                  {...formik.getFieldProps('fatherName')}
                  label={CONTACT_INFORMATION.fatherName}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
                <TextField
                  id="phone"
                  {...formik.getFieldProps('phone')}
                  label={CONTACT_INFORMATION.phone}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  error={
                    formik.touched.phone && formik.errors.phone ? true : false
                  }
                  helperText={
                    formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : null
                  }
                />
                <TextField
                  id="email"
                  {...formik.getFieldProps('email')}
                  label={CONTACT_INFORMATION.email}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
                <TextField
                  id="birthdate"
                  {...formik.getFieldProps('birthdate')}
                  label={CONTACT_INFORMATION.birthdate}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
                <TextField
                  id="instagram"
                  {...formik.getFieldProps('instagram')}
                  label={CONTACT_INFORMATION.instagram}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
                <TextField
                  id="facebook"
                  {...formik.getFieldProps('facebook')}
                  label={CONTACT_INFORMATION.facebook}
                  variant="outlined"
                  color="primary"
                  size="medium"
                />
              </div>

              <div className={styles.checkboxesWrapper}>
                <ThemeProvider theme={CheckboxesCustomeTheme}>
                  <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    variant="standard"
                  >
                    <Chip label="Тип шкіри:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinType.dry"
                            name={'skinType.dry'}
                            {...formik.getFieldProps('skinType.dry')}
                          />
                        }
                        label={SKIN_TYPE.dry}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinType.normal"
                            name={'skinType.normal'}
                            {...formik.getFieldProps('skinType.normal')}
                          />
                        }
                        label={SKIN_TYPE.normal}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinType.fat"
                            name={'skinType.fat'}
                            {...formik.getFieldProps('skinType.fat')}
                          />
                        }
                       label={SKIN_TYPE.fat}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinType.combined"
                            name={'skinType.combined'}
                            {...formik.getFieldProps('skinType.combined')}
                          />
                        }
                        label={SKIN_TYPE.combined}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>

                <TextField
                  id="skinType.comment"
                  {...formik.getFieldProps('skinType.comment')}
                  label={SKIN_TYPE.comment}
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
                    <Chip label="Стан шкіри:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.problematic"
                            name={'skinCondition.problematic'}
                            {...formik.getFieldProps(
                              'skinCondition.problematic'
                            )}
                          />
                        }
                        label={SKIN_CONDITION.problematic}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.sensitive"
                            name={'skinCondition.sensitive'}
                            {...formik.getFieldProps('skinCondition.sensitive')}
                          />
                        }
                        label={SKIN_CONDITION.sensitive}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.dehydrated"
                            name={'skinCondition.dehydrated'}
                            {...formik.getFieldProps(
                              'skinCondition.dehydrated'
                            )}
                          />
                        }
                        label={SKIN_CONDITION.dehydrated}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.dryIrritated"
                            name={'skinCondition.dryIrritated'}
                            {...formik.getFieldProps(
                              'skinCondition.dryIrritated'
                            )}
                          />
                        }
                        label={SKIN_CONDITION.dryIrritated}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.fat"
                            name={'skinCondition.fat'}
                            {...formik.getFieldProps('skinCondition.fat')}
                          />
                        }
                        label={SKIN_CONDITION.fat}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.thin"
                            name={'skinCondition.thin'}
                            {...formik.getFieldProps('skinCondition.thin')}
                          />
                        }
                       label={SKIN_CONDITION.thin}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.rosacea"
                            name={'skinCondition.rosacea'}
                            {...formik.getFieldProps('skinCondition.rosacea')}
                          />
                        }
                        label={SKIN_CONDITION.rosacea}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.acne"
                            name={'skinCondition.acne'}
                            {...formik.getFieldProps('skinCondition.acne')}
                          />
                        }
                        label={SKIN_CONDITION.acne}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.pigmentation"
                            name={'skinCondition.pigmentation'}
                            {...formik.getFieldProps(
                              'skinCondition.pigmentation'
                            )}
                          />
                        }
                        label={SKIN_CONDITION.pigmentation}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.fluffOnFace"
                            name={'skinCondition.fluffOnFace'}
                            {...formik.getFieldProps(
                              'skinCondition.fluffOnFace'
                            )}
                          />
                        }
                       label={SKIN_CONDITION.fluffOnFace}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.hirsutism"
                            name={'skinCondition.hirsutism'}
                            {...formik.getFieldProps('skinCondition.hirsutism')}
                          />
                        }
                       label={SKIN_CONDITION.hirsutism}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="skinCondition.bacterialViralSkinDiseases"
                            name={'skinCondition.bacterialViralSkinDiseases'}
                            {...formik.getFieldProps(
                              'skinCondition.bacterialViralSkinDiseases'
                            )}
                          />
                        }
                        label={SKIN_CONDITION.bacterialViralSkinDiseases}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>

                <TextField
                  id="skinCondition.comment"
                  {...formik.getFieldProps('skinCondition.comment')}
                  label={SKIN_CONDITION.comment}
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
                    <Chip label="Алергічні реакції:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="allergicReactions.food"
                            name={'allergicReactions.food'}
                            {...formik.getFieldProps('allergicReactions.food')}
                          />
                        }
                        label={ALLERGIC_REACTIONS.food}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="allergicReactions.medicines"
                            name={'allergicReactions.medicines'}
                            {...formik.getFieldProps(
                              'allergicReactions.medicines'
                            )}
                          />
                        }
                        label={ALLERGIC_REACTIONS.medicines}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="allergicReactions.cosmetics"
                            name={'allergicReactions.cosmetics'}
                            {...formik.getFieldProps(
                              'allergicReactions.cosmetics'
                            )}
                          />
                        }
                        label={ALLERGIC_REACTIONS.cosmetics}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>

                <TextField
                  id="allergicReactions.comment"
                  {...formik.getFieldProps('allergicReactions.comment')}
                  label={ALLERGIC_REACTIONS.comment}
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
                    <Chip label="Морфотип:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.tired"
                            name={'morphotype.tired'}
                            {...formik.getFieldProps('morphotype.tired')}
                          />
                        }
                        label={MORPHOTYPE.tired}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.finelyWrinkled"
                            name={'morphotype.finelyWrinkled'}
                            {...formik.getFieldProps(
                              'morphotype.finelyWrinkled'
                            )}
                          />
                        }
                        label={MORPHOTYPE.finelyWrinkled}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.edematousDeforming"
                            name={'morphotype.edematousDeforming'}
                            {...formik.getFieldProps(
                              'morphotype.edematousDeforming'
                            )}
                          />
                        }
                         label={MORPHOTYPE.edematousDeforming}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.mixed"
                            name={'morphotype.mixed'}
                            {...formik.getFieldProps('morphotype.mixed')}
                          />
                        }
                       label={MORPHOTYPE.mixed}
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.muscular"
                            name={'morphotype.muscular'}
                            {...formik.getFieldProps('morphotype.muscular')}
                          />
                        }
                       label={MORPHOTYPE.muscular}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>

                <TextField
                  id="morphotype.comment"
                  {...formik.getFieldProps('morphotype.comment')}
                 label={MORPHOTYPE.comment}
                  variant="outlined"
                  color="primary"
                  size="small"
                />
              </div>

              <div className={styles.additionalCommentWrapper}>
                <TextField
                  id="comment"
                  {...formik.getFieldProps('comment')}
                  label="Додаткові нотатки"
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

      <div className={styles.tagsWrapper}>
        <Chip label="Теги:" />
        {tags.length ? (
          <div className={styles.chipsStack}>
            <ChipsStack tagsArr={tags} handleDelete={handleChipDeleting}  />
          </div>
        ) : null}

        <Formik
          initialValues={{ newTag: '' }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            actions.resetForm();
            console.log(values);
            setTags([...tags, values.newTag]);
          }}
        >
          {(formikNewTag) => (
            <form onSubmit={(e) => {
                e.preventDefault();
              }}>
              <div className={styles.newTagInputsWrapper}>
                <TextField
                  id="newTag"
                  {...formikNewTag.getFieldProps('newTag')}
                  label="Додати тег"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  sx={{ width: '70%' }}
                />
                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => formikNewTag.handleSubmit()}
                    saveButtonName="Додати"
                  />
                </div>
  </div>
                <div className={styles.buttonsBlock}>
                  <ButtonsBar
                    handleSave={() => formikNewTag.handleSubmit()}
                    handleClose={() => formikNewTag.resetForm()}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                  />
              
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
