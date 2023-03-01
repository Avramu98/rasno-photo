import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Typography,
} from '@mui/material';
import { send } from '@emailjs/browser';

import { CssTextField } from '@/components/contactPage/contact/CustomTextField';
import { FormDataI, FormFieldType, formInitialState } from 'types/contactPage';
import { AppContext } from '@/lib/context/appContext';
import OverlayLoader from '@/components/shared/loading/OverlayLoader';

import { SnackbarTypeI } from '../../../types/context';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataI>(formInitialState);
  const [loading, setIsLoading] = useState<boolean>(false);
  const { openSnackbar } = useContext(AppContext);

  const handleErrors = (error: string, type: FormFieldType) => {
    if (error === 'clearError') {
      setFormData((prevState) =>
        ({
          ...prevState, [type]: {
            ...prevState[type],
            errors: new Set(),
          },
        }));
    } else {
      setFormData((prevState) =>
        ({
          ...prevState, [type]: {
            ...prevState[type],
            errors: new Set(prevState[type].errors.add(error)),
          },
        }));
    }
  };

  const handleFormData = (newValue: string, type: FormFieldType) => {
    setFormData((prevState) =>
      ({
        ...prevState,

        [type]: {
          ...prevState[type],
          value: newValue,
          isTouched: true,
        },
      }));
  };

  const formValidator = () => {
    const { email, name, message } = formData;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!emailRegex.test(email.value) && email.isTouched) {
      handleErrors('Introdu un email valid !', FormFieldType.EMAIL);
    } else {
      handleErrors('clearError', FormFieldType.EMAIL);
    }

    if (!nameRegex.test(name.value) && name.isTouched) {
      handleErrors('Introdu un nume valid !', FormFieldType.NAME);
    } else {
      handleErrors('clearError', FormFieldType.NAME);
    }

    if (message.value.length < 10 && message.isTouched) {
      handleErrors('Introdu minim 10 caractere !', FormFieldType.MESSAGE);
    } else {
      handleErrors('clearError', FormFieldType.MESSAGE);
    }
  };

  const hasErrorsAndValues = () => {
    const { email, name, message } = formData;

    return !(
      (email.value && email.errors.size === 0) &&
            (name.value && name.errors.size === 0) &&
            (message.value && message.errors.size === 0));
  };

  const handleSendEmail = () => {
    const templateParams = {
      name: formData.name.value,
      email: formData.email.value,
      message: formData.message.value,
    };
    setIsLoading(true);

    send('service_b4wrder', 'template_l2qj5w5', templateParams, 'jDbxJS2Dipc03OI0G').then(() => {
      setFormData(formInitialState);
      setIsLoading(false);
      openSnackbar('Mesaj trimis cu succes!', SnackbarTypeI.SUCCESS);
    }).catch(err => {
      setIsLoading(false);
      openSnackbar(err, SnackbarTypeI.ERROR);
    });
  };


  useEffect(() => {
    formValidator();
  }, [formData.name.value, formData.email.value, formData.message.value]);

  return (
        <Box className='shadow-2xl shadow-cyan-500/50 rounded-2xl relative bg-white border-white h-fit p-5 w-80 md:w-96'>
            <FormControl className='flex flex-col gap-4'>
                <div className='form-field-wrapper'>
                    <Typography
                        className='error-text'>{formData.name.errors}</Typography>
                    <CssTextField
                        className='font-poppins w-full'
                        id="outlined-required"
                        error={formData.name.errors.size !== 0}
                        value={formData.name.value}
                        label="Nume*"
                        onChange={(e) => handleFormData(e.target.value, FormFieldType.NAME)}
                    />
                </div>

                <div className='form-field-wrapper'>
                    <Typography
                        className='error-text'>{formData.email.errors}</Typography>
                    <CssTextField
                        id="outlined-required"
                        className='font-poppins w-full'
                        value={formData.email.value}
                        error={formData.email.errors.size !== 0}
                        label="Email*"
                        onChange={(e) => handleFormData(e.target.value, FormFieldType.EMAIL)}

                    />
                </div>

                <div className='form-field-wrapper'>
                    <Typography
                        className='error-text'>{formData.message.errors}</Typography>
                    <CssTextField
                        id="outlined-required"
                        label="Mesaj*"
                        value={formData.message.value}
                        className='font-poppins w-full'
                        error={formData.message.errors.size !== 0}
                        onChange={(e) => handleFormData(e.target.value, FormFieldType.MESSAGE)}
                        multiline
                    />
                </div>

                <Button onClick={() => handleSendEmail()} disabled={hasErrorsAndValues()}
                        className='font-prompt font-bold'
                        variant='outlined'>Trimite</Button>
            </FormControl>
            {loading && <OverlayLoader/>}
        </Box>
  );
};

export default ContactForm;