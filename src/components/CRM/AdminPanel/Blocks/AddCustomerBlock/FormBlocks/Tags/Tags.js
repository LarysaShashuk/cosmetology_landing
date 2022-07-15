import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { tagsAdded } from '../../../../../../../redux/actions/customerActions';
import CustomeAlert from '../../../../Common/CustomeAlert/CustomeAlert';
import ButtonsBar from '../../../../Common/ButtonsBar/ButtonsBar';

import ChipsStack from '../../../../ActionPanel/ChipsStack/ChipsStack';
import {
    FormBlockCustomeTheme,
} from '../../MuiThemes.js';
import styles from './Tags.module.scss';


export default function Tags() {
    let dispatch = useDispatch();

    const [tags, setTags] = useState([]);
    const [isLocalTagsSaved, setLocalTagsSaved] = useState(false);
    const [isStoredTagsSaved, setStoredTagsSaved] = useState(false);

    const handleChipDeleting = (chip) => {
        setTags(tags.filter((tag) => tag !== chip));
    };

    const tagsFromState = useSelector((state) => state.customer.tags);

    useEffect(() => {
        setTags([...tagsFromState]);
        setStoredTagsSaved(!!tagsFromState[0]);
    }, [tagsFromState])

    const handleEdit = () => {
        setLocalTagsSaved(false)
        setStoredTagsSaved(false)
    }

    return (
        <ThemeProvider theme={FormBlockCustomeTheme}>

            <div className={styles.tagsWrapper}>
                {isLocalTagsSaved || isStoredTagsSaved ? (
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
                {tags?.length ? (
                    <div className={styles.chipsStack}>
                        <ChipsStack tagsArr={tags} handleDelete={!isStoredTagsSaved ? handleChipDeleting : null} />
                    </div>
                ) : null}

                <Formik
                    initialValues={{ newTag: '' }}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(false);
                        actions.resetForm();
                        setLocalTagsSaved(true);
                        dispatch(tagsAdded(tags));
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
                                    disabled={isLocalTagsSaved || isStoredTagsSaved}
                                    sx={{ width: '90%' }}

                                />

                                <div className={styles.addButtonBlock}>
                                    <ButtonsBar
                                        handleSave={() => {
                                            setTags([...tags, formikNewTag.values.newTag]);
                                            formikNewTag.resetForm();
                                        }}
                                        saveButtonName="Додати"
                                        disabled={isLocalTagsSaved || isStoredTagsSaved}
                                    />
                                </div>
                            </div>

                            <div  >
                                <ButtonsBar
                                    handleSave={() => formikNewTag.handleSubmit()}
                                    handleClose={() => {
                                        formikNewTag.resetForm();
                                        setLocalTagsSaved(false);
                                        setTags([]);
                                        dispatch(tagsAdded([]));
                                    }}
                                    saveButtonName="Зберегти"
                                    closeButtonName="Очистити"
                                    disabled={isLocalTagsSaved || isStoredTagsSaved || !tags[0]}
                                />
                            </div>
                            {isLocalTagsSaved || isStoredTagsSaved ? <div className={styles.editButton}>
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
    );
}
