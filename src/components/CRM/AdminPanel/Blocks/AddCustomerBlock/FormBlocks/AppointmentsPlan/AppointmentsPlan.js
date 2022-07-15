import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { appointmentsPlanAdded } from '../../../../../../../redux/actions/customerActions';
import { APPOINTMENTS_PLAN } from '../../../../Common/Constants/AppointmentsPlanConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme, TableCustomeTheme } from '../../MuiThemes.js';
import { AppointmentsPlanInitialValues } from './InitialValues';
import styles from './AppointmentsPlan.module.scss';

export default function AppointmentsPlan() {
  let dispatch = useDispatch();

  const [appointmentsPlan, setAppointmentsPlan] = useState([]);
  const [isLocalAppointmentsPlanSaved, setLocalAppointmentsPlanSaved] = useState(false);
  const [isStoredAppointmentsPlanSaved, setStoredAppointmentsPlanSaved] = useState(false);

  const appointmentsPlanFromState = useSelector((state) => state.customer.appointmentsPlan);

  useEffect(() => {
    setAppointmentsPlan([...appointmentsPlanFromState]);
    setStoredAppointmentsPlanSaved(!!appointmentsPlanFromState[0]);
  }, [appointmentsPlanFromState])

  const handleEdit = () => {
    setLocalAppointmentsPlanSaved(false)
    setStoredAppointmentsPlanSaved(false)
  }

  const showCorrectDateFormat = (string) => {
    return string.replace('T', ', ');
  };

  return (
    <>
      {isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved ? (
        <CustomeAlert
          title="Збережено"
          message=" Дані цієї частини форми - успішно збережено."
          severity="success"
        />
      ) : <CustomeAlert
        title="Не заповнено"
        message="Ця частина форма не є обов'язковою."
        severity="info"
      />}

      {appointmentsPlan?.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{APPOINTMENTS_PLAN.date}</TableCell>
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
                  {appointmentsPlan.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {showCorrectDateFormat(appointment.date)}
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
              actions.setSubmitting(false);
              actions.resetForm();
              setLocalAppointmentsPlanSaved(true);
              dispatch(appointmentsPlanAdded(appointmentsPlan));
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
                    id="date"
                    {...formik.getFieldProps('date')}
                    label={APPOINTMENTS_PLAN.date}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved}
                  />

                  <TextField
                    id="procedure"
                    {...formik.getFieldProps('procedure')}
                    label={APPOINTMENTS_PLAN.procedure}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved}
                  />
                  <TextField
                    id="comment"
                    {...formik.getFieldProps('comment')}
                    label={APPOINTMENTS_PLAN.comment}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved}
                  />
                  <TextField
                    id="result"
                    {...formik.getFieldProps('result')}
                    label={APPOINTMENTS_PLAN.result}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved}
                  />
                </div>

                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => {
                      formik.resetForm();
                      setAppointmentsPlan([...appointmentsPlan, formik.values]);
                    }}
                    saveButtonName="Додати"
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved}
                  />
                </div>

                <div >
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    handleClose={() => {
                      formik.resetForm();
                      setLocalAppointmentsPlanSaved(false);
                      setAppointmentsPlan([]);
                      dispatch(appointmentsPlanAdded([]));
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved || !appointmentsPlan[0]}
                  />
                </div>

                {isLocalAppointmentsPlanSaved || isStoredAppointmentsPlanSaved ? <div className={styles.editButton}>
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
    </>
  );
}
