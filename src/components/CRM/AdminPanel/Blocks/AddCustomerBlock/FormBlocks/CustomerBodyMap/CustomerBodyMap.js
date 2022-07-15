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
import Chip from '@mui/material/Chip';

import { customerBodyMap_BodyParametersAdded, customerBodyMap_CelluliteAdded, customerBodyMap_ResultsAdded } from '../../../../../../../redux/actions/customerActions';
import {
  BODY_PARAMETERS,
  CELLULITE,
  RESULTS,
} from '../../../../Common/Constants/CustomerBodyMapConstants';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import { FormBlockCustomeTheme, TableCustomeTheme } from '../../MuiThemes.js';
import {
  BodyParametersInitialValues,
  CelluliteInitialValues,
  ResultsInitialValues,
} from './InitialValues';
import styles from './CustomerBodyMap.module.scss';

export default function CustomerBodyMap() {
  let dispatch = useDispatch();

  const [bodyParameters, setBodyParameters] = useState({});
  const [isLocalBodyParametersSaved, setLocalBodyParametersSaved] = useState(false);
  const [isStoredBodyParametersSaved, setStoredBodyParametersSaved] = useState(false);

  const [cellulite, setCellulite] = useState([]);
  const [isLocalCelluliteSaved, setLocalCelluliteSaved] =
    useState(false);
  const [isStoredCelluliteSaved, setStoredCelluliteSaved] =
    useState(false);

  const [results, setResults] = useState([]);
  const [isLocalResultsSaved, setLocalResultsSaved] = useState(false);
  const [isStoredResultsSaved, setStoredResultsSaved] = useState(false);

  const bodyParametersFromState = useSelector((state) => state.customer.customerBodyMap.bodyParameters);
  const celluliteFromState = useSelector((state) => state.customer.customerBodyMap.cellulite);
  const resultsFromState = useSelector((state) => state.customer.customerBodyMap.results);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {

    setBodyParameters({ ...bodyParametersFromState })
    setStoredBodyParametersSaved(!isEmpty(bodyParametersFromState))

    setCellulite([...celluliteFromState])
    setStoredCelluliteSaved(!!celluliteFromState[0])

    setResults([...resultsFromState])
    setStoredResultsSaved(!!resultsFromState[0])

  }, [bodyParametersFromState, celluliteFromState, resultsFromState])


  const handleBodyParametersEdit = () => {
    setLocalBodyParametersSaved(false)
    setStoredBodyParametersSaved(false)
  }

  const handleResultsEdit = () => {
    setLocalResultsSaved(false)
    setStoredResultsSaved(false)
  }

  const handleCelluliteEdit = () => {
    setLocalCelluliteSaved(false)
    setStoredCelluliteSaved(false)
  }


  return (
    <>
      <ThemeProvider theme={FormBlockCustomeTheme}>
        <div className={styles.customerBodyBlockWrapper}>
          {isLocalBodyParametersSaved || isStoredBodyParametersSaved ?
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
            initialValues={isEmpty(bodyParametersFromState) ? BodyParametersInitialValues : bodyParametersFromState}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              setLocalBodyParametersSaved(true);
              dispatch(customerBodyMap_BodyParametersAdded({ ...bodyParameters }));
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
                    label={BODY_PARAMETERS.height}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalBodyParametersSaved || isStoredBodyParametersSaved}
                  />

                  <TextField
                    id="edemaPredisposition"
                    {...formik.getFieldProps('edemaPredisposition')}
                    label={BODY_PARAMETERS.edemaPredisposition}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalBodyParametersSaved || isStoredBodyParametersSaved}
                  />
                  <TextField
                    id="vascularProblems"
                    {...formik.getFieldProps('vascularProblems')}
                    label={BODY_PARAMETERS.vascularProblems}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalBodyParametersSaved || isStoredBodyParametersSaved}
                  />
                  <TextField
                    id="stretchMarks"
                    {...formik.getFieldProps('stretchMarks')}
                    label={BODY_PARAMETERS.stretchMarks}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalBodyParametersSaved || isStoredBodyParametersSaved}
                  />
                </div>

                <div>
                  <ButtonsBar
                    handleSave={() => {
                      formik.handleSubmit();
                      setBodyParameters(formik.values);
                    }}
                    handleClose={() => {
                      formik.resetForm();
                      setLocalBodyParametersSaved(false);
                      setStoredBodyParametersSaved(false);
                      setBodyParameters({});
                      dispatch(
                        customerBodyMap_BodyParametersAdded({

                        }));
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isLocalBodyParametersSaved || isStoredBodyParametersSaved}
                  />
                </div>

                {isLocalBodyParametersSaved || isStoredBodyParametersSaved
                  ? <div className={styles.editButton}>
                    <ButtonsBar
                      handleSave={() => handleBodyParametersEdit()}
                      saveButtonName="Редагувати"
                    />
                  </div> : null
                }
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <Chip label="Целюліт:" />
      </ThemeProvider>

      {isLocalCelluliteSaved || isStoredCelluliteSaved ?
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

      {cellulite.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{CELLULITE.date}</TableCell>
                    <TableCell align="right">{CELLULITE.zone}</TableCell>
                    <TableCell align="right">{CELLULITE.stage}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cellulite.map((celluliteZone, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {celluliteZone.date}
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
              actions.setSubmitting(false);
              actions.resetForm();
              setLocalCelluliteSaved(true);
              dispatch(customerBodyMap_CelluliteAdded(cellulite));
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
                    label={CELLULITE.date}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled={isLocalCelluliteSaved || isStoredCelluliteSaved}
                  />

                  <TextField
                    id="zone"
                    {...formik.getFieldProps('zone')}
                    label={CELLULITE.zone}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalCelluliteSaved || isStoredCelluliteSaved}
                  />
                  <TextField
                    id="stage"
                    {...formik.getFieldProps('stage')}
                    label={CELLULITE.stage}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalCelluliteSaved || isStoredCelluliteSaved}
                  />
                </div>

                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => {
                      formik.resetForm();
                      setCellulite([...cellulite, formik.values]);
                    }}
                    saveButtonName="Додати"
                    disabled={isLocalCelluliteSaved || isStoredCelluliteSaved}
                  />
                </div>
                <div>
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    handleClose={() => {
                      formik.resetForm();
                      setLocalCelluliteSaved(false);
                      setStoredCelluliteSaved(false);
                      setCellulite([]);
                      dispatch(
                        customerBodyMap_CelluliteAdded([]));
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isLocalCelluliteSaved || isStoredCelluliteSaved || !cellulite[0]}
                  />
                </div>
                {isLocalCelluliteSaved || isStoredCelluliteSaved
                  ? <div className={styles.editButton}>
                    <ButtonsBar
                      handleSave={() => handleCelluliteEdit()}
                      saveButtonName="Редагувати"
                    />
                  </div> : null
                }
              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>

      <ThemeProvider theme={FormBlockCustomeTheme}>
        <Chip label="Результати:" />
      </ThemeProvider>

      {isLocalResultsSaved || isStoredResultsSaved ? (
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

      {results.length ? (
        <ThemeProvider theme={TableCustomeTheme}>
          <div className={styles.tableWrapper}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{RESULTS.date}</TableCell>
                    <TableCell align="right">
                      {RESULTS.weight}
                    </TableCell>
                    <TableCell align="right">
                      {RESULTS.bloodPressure}
                    </TableCell>
                    <TableCell align="right">
                      {RESULTS.waistCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {RESULTS.thighsCircumference}
                    </TableCell>
                    <TableCell align="right">
                      {RESULTS.otherMeasurements}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results.map((appointment, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {appointment.date}
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
            initialValues={ResultsInitialValues}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              actions.resetForm();
              setLocalResultsSaved(true);
              dispatch(customerBodyMap_ResultsAdded(results));

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
                    label={RESULTS.date}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />

                  <TextField
                    id="weight"
                    {...formik.getFieldProps('weight')}
                    label={RESULTS.weight}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />
                  <TextField
                    id="bloodPressure"
                    {...formik.getFieldProps('bloodPressure')}
                    label={RESULTS.bloodPressure}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />
                  <TextField
                    id="waistCircumference"
                    {...formik.getFieldProps('waistCircumference')}
                    label={RESULTS.waistCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />
                  <TextField
                    id="thighsCircumference"
                    {...formik.getFieldProps('thighsCircumference')}
                    label={RESULTS.thighsCircumference}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />

                  <TextField
                    id="otherMeasurements"
                    {...formik.getFieldProps('otherMeasurements')}
                    label={RESULTS.otherMeasurements}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />
                </div>

                <div className={styles.addButtonBlock}>
                  <ButtonsBar
                    handleSave={() => {
                      formik.resetForm();
                      setResults([...results, formik.values]);
                    }}
                    saveButtonName="Додати"
                    disabled={isLocalResultsSaved || isStoredResultsSaved}
                  />
                </div>

                <div >
                  <ButtonsBar
                    handleSave={() => formik.handleSubmit()}
                    handleClose={() => {
                      formik.resetForm();
                      setLocalResultsSaved(false);
                      setStoredResultsSaved(false);
                      setResults([]);
                      dispatch(customerBodyMap_ResultsAdded([]));
                    }}
                    saveButtonName="Зберегти"
                    closeButtonName="Очистити"
                    disabled={isLocalResultsSaved || isStoredResultsSaved || !results[0]}
                  />
                </div>

                {isLocalResultsSaved || isStoredResultsSaved
                  ? <div className={styles.editButton}>
                    <ButtonsBar
                      handleSave={() => handleResultsEdit()}
                      saveButtonName="Редагувати"
                    />
                  </div> : null
                }


              </form>
            )}
          </Formik>
        </div>
      </ThemeProvider>
    </>
  );
}
