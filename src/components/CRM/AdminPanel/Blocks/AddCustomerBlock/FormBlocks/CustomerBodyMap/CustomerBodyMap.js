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
  CUSTOMER_BODY,
  CELLULITE,
  APPOINTMENTS_PLAN,
} from '../../../../Common/Constants/CustomerBodyMapConstants';
import {
  CustomerBodyInitialValues,
  CelluliteInitialValues,
  AppointmentsPlanInitialValues,
} from './InitialValues';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import styles from './CustomerBodyMap.module.scss';
import {
  FormBlockCustomeTheme,
  TableCustomeTheme,
} from '../../MuiThemes.js';

export default function CustomerBodyMap() {
  const [celluliteZonesSchema, setCelluliteZonesSchema] = useState([]);
  const [appointments, setAppointments] = useState([]);

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
                    label={CUSTOMER_BODY.height}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="edemaPredisposition"
                    {...formik.getFieldProps('edemaPredisposition')}
                    label={CUSTOMER_BODY.edemaPredisposition}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="vascularProblems"
                    {...formik.getFieldProps('vascularProblems')}
                    label={CUSTOMER_BODY.vascularProblems}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="stretchMarks"
                    {...formik.getFieldProps('stretchMarks')}
                    label={CUSTOMER_BODY.stretchMarks}
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
</ThemeProvider>

      {celluliteZonesSchema.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{CELLULITE.data}</TableCell>
                    <TableCell align="right">{CELLULITE.zone}</TableCell>
                    <TableCell align="right">{CELLULITE.stage}</TableCell>
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
              setCelluliteZonesSchema([...celluliteZonesSchema, values]);
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
                    label={CELLULITE.data}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="zone"
                    {...formik.getFieldProps('zone')}
                    label={CELLULITE.zone}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="stage"
                    {...formik.getFieldProps('stage')}
                    label={CELLULITE.stage}
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
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>

<ThemeProvider theme={FormBlockCustomeTheme}>
 <Chip label="Графік відвідувань:" />
</ThemeProvider>
      {appointments.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{APPOINTMENTS_PLAN.data}</TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.weight}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.bloodPressure}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.waistCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.thighsCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.otherMeasurements}
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
              setAppointments([...appointments, values]);
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
                    label={APPOINTMENTS_PLAN.data}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="weight"
                    {...formik.getFieldProps('weight')}
                    label={APPOINTMENTS_PLAN.weight}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="bloodPressure"
                    {...formik.getFieldProps('bloodPressure')}
                    label={APPOINTMENTS_PLAN.bloodPressure}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="waistCircumference"
                    {...formik.getFieldProps('waistCircumference')}
                    label={APPOINTMENTS_PLAN.waistCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="thighsCircumference"
                    {...formik.getFieldProps('thighsCircumference')}
                    label={APPOINTMENTS_PLAN.thighsCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />

                  <TextField
                    id="otherMeasurements"
                    {...formik.getFieldProps('otherMeasurements')}
                    label={APPOINTMENTS_PLAN.otherMeasurements}
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
