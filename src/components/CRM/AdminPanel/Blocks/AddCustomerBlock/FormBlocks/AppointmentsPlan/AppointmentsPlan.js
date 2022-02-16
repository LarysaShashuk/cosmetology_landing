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

import {APPOINTMENTS_PLAN} from '../../../../Common/Constants/AppointmentsPlanConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import { AppointmentsPlanInitialValues } from './InitialValues';
import styles from './AppointmentsPlan.module.scss';
import {
  FormBlockCustomeTheme,
  TableCustomeTheme,
} from '../../MuiThemes.js';

export default function AppointmentsPlan() {
  const [appointments, setAppointments] = useState([]);

  return (
    <>
      {appointments.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Дата</TableCell>
                    <TableCell align="right">Процедури</TableCell>
                    <TableCell align="right">Коментар</TableCell>
                    <TableCell align="right">Результат</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {appointment.data}
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
