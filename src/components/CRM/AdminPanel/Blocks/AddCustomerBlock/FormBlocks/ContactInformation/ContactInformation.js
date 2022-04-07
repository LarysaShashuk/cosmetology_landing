import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { contactInformationAdded } from '../../../../../../../redux/actions/customerActions';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import {
  CONTACT_INFORMATION,
  SKIN_TYPE,
  SKIN_CONDITION,
  ALLERGIC_REACTIONS,
  MORPHOTYPE,
} from '../../../../Common/Constants/ContactInformationConstants';
import ChipsStack from '../../../../ActionPanel/ChipsStack/ChipsStack';
import {
  FormBlockCustomeTheme,
  CheckboxesCustomeTheme,
} from '../../MuiThemes.js';
import styles from './ContactInformation.module.scss';
import { ContactInformationInitialValues } from './InitialValues';

export default function ContactInformation() {
  let dispatch = useDispatch();

  const [tags, setTags] = useState([]);
  const [contactInformation, setContactInformation] = useState({});
  const [isContactInformationSaved, setContactInformationSaved] =
    useState(false);
  const [isTagsSaved, setTagsSaved] = useState(false);

  const handleChipDeleting = (chip) => {
    setTags(tags.filter((tag) => tag !== chip));
  };

  const state = useSelector((state) => state.customer);

  console.log(state);

  return (
    <ThemeProvider theme={FormBlockCustomeTheme}>
      <div>
        {isContactInformationSaved ? (
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
          />
        ) : null}
        <Formik
          initialValues={ContactInformationInitialValues}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Це поле є обов`язковим.'),
            lastName: Yup.string().required('Це поле є обов`язковим.'),
            phone: Yup.string().required('Це поле є обов`язковим.'),
            // .phone(undefined, undefined, 'Номер телефону повин відповідати прикладу: +380111111111.'),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            setContactInformationSaved(true);
            dispatch(contactInformationAdded({ ...contactInformation, tags }));
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
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                            checked={formik.values.skinType.dry}
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
                            checked={formik.values.skinType.normal}
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
                            checked={formik.values.skinType.fat}
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
                            checked={formik.values.skinType.combined}
                          />
                        }
                        label={SKIN_TYPE.combined}
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
                            checked={formik.values.skinCondition.problematic}
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
                            checked={formik.values.skinCondition.sensitive}
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
                            checked={formik.values.skinCondition.dehydrated}
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
                            checked={formik.values.skinCondition.dryIrritated}
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
                            checked={formik.values.skinCondition.fat}
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
                            checked={formik.values.skinCondition.thin}
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
                            checked={formik.values.skinCondition.rosacea}
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
                            checked={formik.values.skinCondition.acne}
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
                            checked={formik.values.skinCondition.pigmentation}
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
                            checked={formik.values.skinCondition.fluffOnFace}
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
                            checked={formik.values.skinCondition.hirsutism}
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
                            checked={
                              formik.values.skinCondition
                                .bacterialViralSkinDiseases
                            }
                          />
                        }
                        label={SKIN_CONDITION.bacterialViralSkinDiseases}
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
                  >
                    <Chip label="Алергічні реакції:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="allergicReactions.food"
                            name={'allergicReactions.food'}
                            {...formik.getFieldProps('allergicReactions.food')}
                            checked={formik.values.allergicReactions.food}
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
                            checked={formik.values.allergicReactions.medicines}
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
                            checked={formik.values.allergicReactions.cosmetics}
                          />
                        }
                        label={ALLERGIC_REACTIONS.cosmetics}
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
                  >
                    <Chip label="Морфотип:" />
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            id="morphotype.tired"
                            name={'morphotype.tired'}
                            {...formik.getFieldProps('morphotype.tired')}
                            checked={formik.values.morphotype.tired}
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
                            checked={formik.values.morphotype.finelyWrinkled}
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
                            checked={
                              formik.values.morphotype.edematousDeforming
                            }
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
                            checked={formik.values.morphotype.mixed}
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
                            checked={formik.values.morphotype.muscular}
                          />
                        }
                        label={MORPHOTYPE.muscular}
                      />
                    </FormGroup>
                  </FormControl>
                </ThemeProvider>
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
                  handleSave={() => {
                    formik.handleSubmit();
                    setContactInformation(formik.values);
                  }}
                  handleClose={() => {
                    formik.resetForm();
                    setContactInformationSaved(false);
                    setContactInformation({});
                    dispatch(
                      tags?.length
                        ? contactInformationAdded({ tags })
                        : contactInformationAdded({})
                    );
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={!formik.isValid || isContactInformationSaved}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className={styles.tagsWrapper}>
        <Chip label="Теги:" />
        {isTagsSaved ? (
          <CustomeAlert
            title="Збережено"
            message=" Дані цієї частини форми - успішно збережено."
          />
        ) : null}
        {tags?.length ? (
          <div className={styles.chipsStack}>
            <ChipsStack tagsArr={tags} handleDelete={handleChipDeleting} />
          </div>
        ) : null}

        <Formik
          initialValues={{ newTag: '' }}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);
            actions.resetForm();
            // console.log(values);
            setTagsSaved(true);
            dispatch(contactInformationAdded({ ...contactInformation, tags }));
          }}
        >
          {(formikNewTag) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
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
                    handleSave={() => {
                      setTags([...tags, formikNewTag.values.newTag]);
                      formikNewTag.resetForm();
                    }}
                    saveButtonName="Додати"
                    disabled={isTagsSaved}
                  />
                </div>
              </div>
              <div className={styles.buttonsBlock}>
                <ButtonsBar
                  handleSave={() => formikNewTag.handleSubmit()}
                  handleClose={() => {
                    formikNewTag.resetForm();
                    setTagsSaved(false);
                    setTags([]);
                    dispatch(
                      contactInformation
                        ? contactInformationAdded({ ...contactInformation })
                        : contactInformationAdded({})
                    );
                  }}
                  saveButtonName="Зберегти"
                  closeButtonName="Очистити"
                  disabled={isTagsSaved}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ThemeProvider>
  );
}
