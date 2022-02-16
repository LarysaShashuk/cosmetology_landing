import React, { useState } from 'react';
import { Formik } from 'formik';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {
  CUSTOMER_FACE_MAP,
  FACE_MARKERS,
} from '../../../../Common/Constants/CustomerFaceMapConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import { CustomerFaceMapInitialValues } from './InitialValues';
import styles from './CustomerFaceMap.module.scss';
import {
  FormBlockCustomeTheme,
  TableCustomeTheme,
  CheckboxesCustomeTheme,
} from '../../MuiThemes.js';

export default function CustomerFaceMap() {
  const [customerFaceData, setCustomerFaceData] = useState([]);

  return (
    <>
      {customerFaceData.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{CUSTOMER_FACE_MAP.data}</TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.upperThird}
                    </TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.middleThird}
                    </TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.bottomThird}
                    </TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.neck}
                    </TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.neckline}
                    </TableCell>
                    <TableCell align="right">
                      {CUSTOMER_FACE_MAP.tZone}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerFaceData.map((appointment, index) => {
                    const mapAppointmentObject = (obj) => {
                      const ArrayOfValues = [];
                      for (let key in obj) {
                        if (obj[key] === true) {
                          ArrayOfValues.push(FACE_MARKERS[key]);
                        }
                      }
                      return ArrayOfValues.map((item, index) => (
                        <div key={index}>{item}</div>
                      ));
                    };

                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {appointment.data}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.upperThird)}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.middleThird)}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.bottomThird)}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.neck)}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.neckline)}
                        </TableCell>
                        <TableCell align="right">
                          {mapAppointmentObject(appointment.tZone)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </ThemeProvider>
      ) : null}

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div>
          <Formik
            initialValues={CustomerFaceMapInitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              actions.resetForm();
              console.log(values);
              setCustomerFaceData([...customerFaceData, values]);
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
                    id="data"
                    {...formik.getFieldProps('data')}
                    label={CUSTOMER_FACE_MAP.data}
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
                      <Chip label={CUSTOMER_FACE_MAP.upperThird + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.wrinkles"
                              name={'upperThird.wrinkles'}
                              {...formik.getFieldProps('upperThird.wrinkles')}
                              checked={formik.values.upperThird.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.inflammation"
                              name={'upperThird.inflammation'}
                              {...formik.getFieldProps(
                                'upperThird.inflammation'
                              )}
                              checked={formik.values.upperThird.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.pigmentation"
                              name={'upperThird.pigmentation'}
                              {...formik.getFieldProps(
                                'upperThird.pigmentation'
                              )}
                              checked={formik.values.upperThird.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.shelling"
                              name={'upperThird.shelling'}
                              {...formik.getFieldProps('upperThird.shelling')}
                              checked={formik.values.upperThird.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.dryness"
                              name={'upperThird.dryness'}
                              {...formik.getFieldProps('upperThird.dryness')}
                              checked={formik.values.upperThird.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.pores"
                              name={'upperThird.pores'}
                              {...formik.getFieldProps('upperThird.pores')}
                              checked={formik.values.upperThird.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.fatness"
                              name={'upperThird.fatness'}
                              {...formik.getFieldProps('upperThird.fatness')}
                              checked={formik.values.upperThird.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.ptosis"
                              name={'upperThird.ptosis'}
                              {...formik.getFieldProps('upperThird.ptosis')}
                              checked={formik.values.upperThird.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.comedones"
                              name={'upperThird.comedones'}
                              {...formik.getFieldProps('upperThird.comedones')}
                              checked={formik.values.upperThird.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.milia"
                              name={'upperThird.milia'}
                              {...formik.getFieldProps('upperThird.milia')}
                              checked={formik.values.upperThird.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.couperose"
                              name={'upperThird.couperose'}
                              {...formik.getFieldProps('upperThird.couperose')}
                              checked={formik.values.upperThird.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.edema"
                              name={'upperThird.edema'}
                              {...formik.getFieldProps('upperThird.edema')}
                              checked={formik.values.upperThird.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.postacne"
                              name={'upperThird.postacne'}
                              {...formik.getFieldProps('upperThird.postacne')}
                              checked={formik.values.upperThird.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="upperThird.scars"
                              name={'upperThird.scars'}
                              {...formik.getFieldProps('upperThird.scars')}
                              checked={formik.values.upperThird.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
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
                      <Chip label={CUSTOMER_FACE_MAP.middleThird + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.wrinkles"
                              name={'middleThird.wrinkles'}
                              {...formik.getFieldProps('middleThird.wrinkles')}
                              checked={formik.values.middleThird.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.inflammation"
                              name={'middleThird.inflammation'}
                              {...formik.getFieldProps(
                                'middleThird.inflammation'
                              )}
                              checked={formik.values.middleThird.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.pigmentation"
                              name={'middleThird.pigmentation'}
                              {...formik.getFieldProps(
                                'middleThird.pigmentation'
                              )}
                              checked={formik.values.middleThird.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.shelling"
                              name={'middleThird.shelling'}
                              {...formik.getFieldProps('middleThird.shelling')}
                              checked={formik.values.middleThird.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.dryness"
                              name={'middleThird.dryness'}
                              {...formik.getFieldProps('middleThird.dryness')}
                              checked={formik.values.middleThird.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.pores"
                              name={'middleThird.pores'}
                              {...formik.getFieldProps('middleThird.pores')}
                              checked={formik.values.middleThird.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.fatness"
                              name={'middleThird.fatness'}
                              {...formik.getFieldProps('middleThird.fatness')}
                              checked={formik.values.middleThird.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.ptosis"
                              name={'middleThird.ptosis'}
                              {...formik.getFieldProps('middleThird.ptosis')}
                              checked={formik.values.middleThird.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.comedones"
                              name={'middleThird.comedones'}
                              {...formik.getFieldProps('middleThird.comedones')}
                              checked={formik.values.middleThird.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.milia"
                              name={'middleThird.milia'}
                              {...formik.getFieldProps('middleThird.milia')}
                              checked={formik.values.middleThird.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.couperose"
                              name={'middleThird.couperose'}
                              {...formik.getFieldProps('middleThird.couperose')}
                              checked={formik.values.middleThird.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.edema"
                              name={'middleThird.edema'}
                              {...formik.getFieldProps('middleThird.edema')}
                              checked={formik.values.middleThird.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.postacne"
                              name={'middleThird.postacne'}
                              {...formik.getFieldProps('middleThird.postacne')}
                              checked={formik.values.middleThird.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="middleThird.scars"
                              name={'middleThird.scars'}
                              {...formik.getFieldProps('middleThird.scars')}
                              checked={formik.values.middleThird.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
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
                      <Chip label={CUSTOMER_FACE_MAP.bottomThird + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.wrinkles"
                              name={'bottomThird.wrinkles'}
                              {...formik.getFieldProps('bottomThird.wrinkles')}
                              checked={formik.values.bottomThird.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.inflammation"
                              name={'bottomThird.inflammation'}
                              {...formik.getFieldProps(
                                'bottomThird.inflammation'
                              )}
                              checked={formik.values.bottomThird.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.pigmentation"
                              name={'bottomThird.pigmentation'}
                              {...formik.getFieldProps(
                                'bottomThird.pigmentation'
                              )}
                              checked={formik.values.bottomThird.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.shelling"
                              name={'bottomThird.shelling'}
                              {...formik.getFieldProps('bottomThird.shelling')}
                              checked={formik.values.bottomThird.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.dryness"
                              name={'bottomThird.dryness'}
                              {...formik.getFieldProps('bottomThird.dryness')}
                              checked={formik.values.bottomThird.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.pores"
                              name={'bottomThird.pores'}
                              {...formik.getFieldProps('bottomThird.pores')}
                              checked={formik.values.bottomThird.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.fatness"
                              name={'bottomThird.fatness'}
                              {...formik.getFieldProps('bottomThird.fatness')}
                              checked={formik.values.bottomThird.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.ptosis"
                              name={'bottomThird.ptosis'}
                              {...formik.getFieldProps('bottomThird.ptosis')}
                              checked={formik.values.bottomThird.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.comedones"
                              name={'bottomThird.comedones'}
                              {...formik.getFieldProps('bottomThird.comedones')}
                              checked={formik.values.bottomThird.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.milia"
                              name={'bottomThird.milia'}
                              {...formik.getFieldProps('bottomThird.milia')}
                              checked={formik.values.bottomThird.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.couperose"
                              name={'bottomThird.couperose'}
                              {...formik.getFieldProps('bottomThird.couperose')}
                              checked={formik.values.bottomThird.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.edema"
                              name={'bottomThird.edema'}
                              {...formik.getFieldProps('bottomThird.edema')}
                              checked={formik.values.bottomThird.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.postacne"
                              name={'bottomThird.postacne'}
                              {...formik.getFieldProps('bottomThird.postacne')}
                              checked={formik.values.bottomThird.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="bottomThird.scars"
                              name={'bottomThird.scars'}
                              {...formik.getFieldProps('bottomThird.scars')}
                              checked={formik.values.bottomThird.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
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
                      <Chip label={CUSTOMER_FACE_MAP.neck + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.wrinkles"
                              name={'neck.wrinkles'}
                              {...formik.getFieldProps('neck.wrinkles')}
                              checked={formik.values.neck.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.inflammation"
                              name={'neck.inflammation'}
                              {...formik.getFieldProps('neck.inflammation')}
                              checked={formik.values.neck.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.pigmentation"
                              name={'neck.pigmentation'}
                              {...formik.getFieldProps('neck.pigmentation')}
                              checked={formik.values.neck.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.shelling"
                              name={'neck.shelling'}
                              {...formik.getFieldProps('neck.shelling')}
                              checked={formik.values.neck.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.dryness"
                              name={'neck.dryness'}
                              {...formik.getFieldProps('neck.dryness')}
                              checked={formik.values.neck.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.pores"
                              name={'neck.pores'}
                              {...formik.getFieldProps('neck.pores')}
                              checked={formik.values.neck.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.fatness"
                              name={'neck.fatness'}
                              {...formik.getFieldProps('neck.fatness')}
                              checked={formik.values.neck.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.ptosis"
                              name={'neck.ptosis'}
                              {...formik.getFieldProps('neck.ptosis')}
                              checked={formik.values.neck.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.comedones"
                              name={'neck.comedones'}
                              {...formik.getFieldProps('neck.comedones')}
                              checked={formik.values.neck.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.milia"
                              name={'neck.milia'}
                              {...formik.getFieldProps('neck.milia')}
                              checked={formik.values.neck.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.couperose"
                              name={'neck.couperose'}
                              {...formik.getFieldProps('neck.couperose')}
                              checked={formik.values.neck.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.edema"
                              name={'neck.edema'}
                              {...formik.getFieldProps('neck.edema')}
                              checked={formik.values.neck.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.postacne"
                              name={'neck.postacne'}
                              {...formik.getFieldProps('neck.postacne')}
                              checked={formik.values.neck.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neck.scars"
                              name={'neck.scars'}
                              {...formik.getFieldProps('neck.scars')}
                              checked={formik.values.neck.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
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
                      <Chip label={CUSTOMER_FACE_MAP.neckline + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.wrinkles"
                              name={'neckline.wrinkles'}
                              {...formik.getFieldProps('neckline.wrinkles')}
                              checked={formik.values.neckline.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.inflammation"
                              name={'neckline.inflammation'}
                              {...formik.getFieldProps('neckline.inflammation')}
                              checked={formik.values.neckline.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.pigmentation"
                              name={'neckline.pigmentation'}
                              {...formik.getFieldProps('neckline.pigmentation')}
                              checked={formik.values.neckline.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.shelling"
                              name={'neckline.shelling'}
                              {...formik.getFieldProps('neckline.shelling')}
                              checked={formik.values.neckline.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.dryness"
                              name={'neckline.dryness'}
                              {...formik.getFieldProps('neckline.dryness')}
                              checked={formik.values.neckline.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.pores"
                              name={'neckline.pores'}
                              {...formik.getFieldProps('neckline.pores')}
                              checked={formik.values.neckline.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.fatness"
                              name={'neckline.fatness'}
                              {...formik.getFieldProps('neckline.fatness')}
                              checked={formik.values.neckline.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.ptosis"
                              name={'neckline.ptosis'}
                              {...formik.getFieldProps('neckline.ptosis')}
                              checked={formik.values.neckline.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.comedones"
                              name={'neckline.comedones'}
                              {...formik.getFieldProps('neckline.comedones')}
                              checked={formik.values.neckline.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.milia"
                              name={'neckline.milia'}
                              {...formik.getFieldProps('neckline.milia')}
                              checked={formik.values.neckline.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.couperose"
                              name={'neckline.couperose'}
                              {...formik.getFieldProps('neckline.couperose')}
                              checked={formik.values.neckline.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.edema"
                              name={'neckline.edema'}
                              {...formik.getFieldProps('neckline.edema')}
                              checked={formik.values.neckline.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.postacne"
                              name={'neckline.postacne'}
                              {...formik.getFieldProps('neckline.postacne')}
                              checked={formik.values.neckline.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="neckline.scars"
                              name={'neckline.scars'}
                              {...formik.getFieldProps('neckline.scars')}
                              checked={formik.values.neckline.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
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
                      <Chip label={CUSTOMER_FACE_MAP.tZone + ':'} />
                      <FormGroup className={styles.innerCheckboxesWrapper}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.wrinkles"
                              name={'tZone.wrinkles'}
                              {...formik.getFieldProps('tZone.wrinkles')}
                              checked={formik.values.tZone.wrinkles}
                            />
                          }
                          label={FACE_MARKERS.wrinkles}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.inflammation"
                              name={'tZone.inflammation'}
                              {...formik.getFieldProps('tZone.inflammation')}
                              checked={formik.values.tZone.inflammation}
                            />
                          }
                          label={FACE_MARKERS.inflammation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.pigmentation"
                              name={'tZone.pigmentation'}
                              {...formik.getFieldProps('tZone.pigmentation')}
                              checked={formik.values.tZone.pigmentation}
                            />
                          }
                          label={FACE_MARKERS.pigmentation}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.shelling"
                              name={'tZone.shelling'}
                              {...formik.getFieldProps('tZone.shelling')}
                              checked={formik.values.tZone.shelling}
                            />
                          }
                          label={FACE_MARKERS.shelling}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.dryness"
                              name={'tZone.dryness'}
                              {...formik.getFieldProps('tZone.dryness')}
                              checked={formik.values.tZone.dryness}
                            />
                          }
                          label={FACE_MARKERS.dryness}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.pores"
                              name={'tZone.pores'}
                              {...formik.getFieldProps('tZone.pores')}
                              checked={formik.values.tZone.pores}
                            />
                          }
                          label={FACE_MARKERS.pores}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.fatness"
                              name={'tZone.fatness'}
                              {...formik.getFieldProps('tZone.fatness')}
                              checked={formik.values.tZone.fatness}
                            />
                          }
                          label={FACE_MARKERS.fatness}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.ptosis"
                              name={'tZone.ptosis'}
                              {...formik.getFieldProps('tZone.ptosis')}
                              checked={formik.values.tZone.ptosis}
                            />
                          }
                          label={FACE_MARKERS.ptosis}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.comedones"
                              name={'tZone.comedones'}
                              {...formik.getFieldProps('tZone.comedones')}
                              checked={formik.values.tZone.comedones}
                            />
                          }
                          label={FACE_MARKERS.comedones}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.milia"
                              name={'tZone.milia'}
                              {...formik.getFieldProps('tZone.milia')}
                              checked={formik.values.tZone.milia}
                            />
                          }
                          label={FACE_MARKERS.milia}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.couperose"
                              name={'tZone.couperose'}
                              {...formik.getFieldProps('tZone.couperose')}
                              checked={formik.values.tZone.couperose}
                            />
                          }
                          label={FACE_MARKERS.couperose}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.edema"
                              name={'tZone.edema'}
                              {...formik.getFieldProps('tZone.edema')}
                              checked={formik.values.tZone.edema}
                            />
                          }
                          label={FACE_MARKERS.edema}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.postacne"
                              name={'tZone.postacne'}
                              {...formik.getFieldProps('tZone.postacne')}
                              checked={formik.values.tZone.postacne}
                            />
                          }
                          label={FACE_MARKERS.postacne}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              id="tZone.scars"
                              name={'tZone.scars'}
                              {...formik.getFieldProps('tZone.scars')}
                              checked={formik.values.tZone.scars}
                            />
                          }
                          label={FACE_MARKERS.scars}
                        />
                      </FormGroup>
                    </FormControl>
                  </ThemeProvider>
                </div>

                <div className={styles.additionalCommentWrapper}>
                  <TextField
                    id="comment"
                    {...formik.getFieldProps('comment')}
                    label={CUSTOMER_FACE_MAP.comment}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                </div>
                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    saveButtonName="Додати"
                    disabled={!formik.isValid}
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
    </>
  );
}
