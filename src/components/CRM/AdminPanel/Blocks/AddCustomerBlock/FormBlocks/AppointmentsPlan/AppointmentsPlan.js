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

import { APPOINTMENTS_PLAN } from '../../../../Common/Constants/AppointmentsPlanConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme, TableCustomeTheme } from '../../MuiThemes.js';
import { AppointmentsPlanInitialValues } from './InitialValues';
import styles from './AppointmentsPlan.module.scss';

export default function AppointmentsPlan() {
  const [appointments, setAppointments] = useState([]);
  const [isAppointmentsPlanSaved, setAppointmentsPlanSaved] = useState(false);

  const showCorrectDateFormat = (string) => {
    return string.replace('T', ', ');
  };

  return (
    <>
      {isAppointmentsPlanSaved ? (
        <CustomeAlert
          title="Збережено"
          message="Дані цієї частини форми - успішно збережено."
        />
      ) : null}

      {appointments.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{APPOINTMENTS_PLAN.data}</TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.procedure}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.comment}
                    </TableCell>
                    <TableCell align="right">
                      {APPOINTMENTS_PLAN.result}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {showCorrectDateFormat(appointment.data)}
                      </TableCell>
                      <TableCell align="right">
                        {appointment.procedure}
                      </TableCell>
                      <TableCell align="right">{appointment.comment}</TableCell>
                      <TableCell align="right">{appointment.result}</TableCell>
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
                    label={APPOINTMENTS_PLAN.data}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="procedure"
                    {...formik.getFieldProps('procedure')}
                    label={APPOINTMENTS_PLAN.procedure}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="comment"
                    {...formik.getFieldProps('comment')}
                    label={APPOINTMENTS_PLAN.comment}
                    variant="outlined"
                    color="primary"
                    size="medium"
                  />
                  <TextField
                    id="result"
                    {...formik.getFieldProps('result')}
                    label={APPOINTMENTS_PLAN.result}
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
