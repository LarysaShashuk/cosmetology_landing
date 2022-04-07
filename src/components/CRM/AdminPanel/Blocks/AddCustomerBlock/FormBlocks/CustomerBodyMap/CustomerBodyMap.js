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

import {
  CUSTOMERS_BODY_MAP,
  CELLULITIS_ZONES,
  PROCEDURES_RESULTS,
} from '../../../../Common/Constants/CustomerBodyMapConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme, TableCustomeTheme } from '../../MuiThemes.js';
import {
  CustomerBodyInitialValues,
  CelluliteInitialValues,
  AppointmentsPlanInitialValues,
} from './InitialValues';
import styles from './CustomerBodyMap.module.scss';

export default function CustomerBodyMap() {
  const [celluliteZonesSchema, setCelluliteZonesSchema] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [isCelluliteInformationSaved, setCelluliteInformationSaved] =
    useState(false);
  const [isAppointmentsPlanSaved, setAppointmentsPlanSaved] = useState(false);

  return (
    <>
      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div className={styles.customerBodyBlockWrapper}>
          <Formik
            initialValues={CustomerBodyInitialValues}
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
                    id="height"
                    {...formik.getFieldProps('height')}
                    label={CUSTOMERS_BODY_MAP.height}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="edemaPredisposition"
                    {...formik.getFieldProps('edemaPredisposition')}
                    label={CUSTOMERS_BODY_MAP.edemaPredisposition}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="vascularProblems"
                    {...formik.getFieldProps('vascularProblems')}
                    label={CUSTOMERS_BODY_MAP.vascularProblems}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="stretchMarks"
                    {...formik.getFieldProps('stretchMarks')}
                    label={CUSTOMERS_BODY_MAP.stretchMarks}
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

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <Chip label="Целюліт:" />
        {isCelluliteInformationSaved ? (
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
          />
        ) : null}
      </ThemeProvider>

      {celluliteZonesSchema.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{CELLULITIS_ZONES.data}</TableCell>
                    <TableCell align="right">{CELLULITIS_ZONES.zone}</TableCell>
                    <TableCell align="right">{CELLULITIS_ZONES.stage}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {celluliteZonesSchema.map((celluliteZone, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {celluliteZone.data}
                      </TableCell>
                      <TableCell align="right">{celluliteZone.zone}</TableCell>
                      <TableCell align="right">{celluliteZone.stage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </ThemeProvider>
      ) : null}

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div className={styles.celluliteBlockWrapper}>
          <Formik
            initialValues={CelluliteInitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              actions.resetForm();
              console.log(values);
              setCelluliteInformationSaved(true);
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
                    label={CELLULITIS_ZONES.data}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="zone"
                    {...formik.getFieldProps('zone')}
                    label={CELLULITIS_ZONES.zone}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="stage"
                    {...formik.getFieldProps('stage')}
                    label={CELLULITIS_ZONES.stage}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                </div>

                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => {
                      formik.resetForm();
                      setCelluliteZonesSchema([
                        ...celluliteZonesSchema,
                        formik.values,
                      ]);
                    }}
                    saveButtonName="Додати"
                    disabled={isCelluliteInformationSaved}
                  />
                </div>
                <div className={styles.buttonsBlock}>
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    handleClose={() => {
                      formik.resetForm();
                      setCelluliteInformationSaved(false);
                      setCelluliteZonesSchema([]);
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isCelluliteInformationSaved}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <Chip label="Графік відвідувань:" />
        {isAppointmentsPlanSaved ? (
          <CustomeAlert
            title="Збережено"
            message="Дані цієї частини форми - успішно збережено."
          />
        ) : null}
      </ThemeProvider>
      {appointments.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{PROCEDURES_RESULTS.data}</TableCell>
                    <TableCell align="right">
                      {PROCEDURES_RESULTS.weight}
                    </TableCell>
                    <TableCell align="right">
                      {PROCEDURES_RESULTS.bloodPressure}
                    </TableCell>
                    <TableCell align="right">
                      {PROCEDURES_RESULTS.waistCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {PROCEDURES_RESULTS.thighsCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {PROCEDURES_RESULTS.otherMeasurements}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {appointment.data}
                      </TableCell>
                      <TableCell align="right">{appointment.weight}</TableCell>
                      <TableCell align="right">
                        {appointment.bloodPressure}
                      </TableCell>
                      <TableCell align="right">
                        {appointment.waistCircumference}
                      </TableCell>
                      <TableCell align="right">
                        {appointment.thighsCircumference}
                      </TableCell>
                      <TableCell align="right">
                        {appointment.otherMeasurements}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </ThemeProvider>
      ) : null}

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div>
          <Formik
            initialValues={AppointmentsPlanInitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              actions.resetForm();
              console.log(values);
              setAppointmentsPlanSaved(true);
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
                    label={PROCEDURES_RESULTS.data}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="weight"
                    {...formik.getFieldProps('weight')}
                    label={PROCEDURES_RESULTS.weight}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="bloodPressure"
                    {...formik.getFieldProps('bloodPressure')}
                    label={PROCEDURES_RESULTS.bloodPressure}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="waistCircumference"
                    {...formik.getFieldProps('waistCircumference')}
                    label={PROCEDURES_RESULTS.waistCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="thighsCircumference"
                    {...formik.getFieldProps('thighsCircumference')}
                    label={PROCEDURES_RESULTS.thighsCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="otherMeasurements"
                    {...formik.getFieldProps('otherMeasurements')}
                    label={PROCEDURES_RESULTS.otherMeasurements}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                </div>

                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => {
                      formik.resetForm();
                      setAppointments([...appointments, formik.values]);
                    }}
                    saveButtonName="Додати"
                    disabled={isAppointmentsPlanSaved}
                  />
                </div>

                <div className={styles.buttonsBlock}>
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    handleClose={() => {
                      formik.resetForm();
                      setAppointmentsPlanSaved(false);
                      setAppointments([]);
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isAppointmentsPlanSaved}
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
