export interface ContactInformationI {
  id: number;
  header: string;
  subtitle: string;
  icon: string;
}

export interface FormDataI {
  [key: string]: {
    value: string;
    errors: any
    isTouched: boolean;
  },
}

export enum FormFieldType {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

export const formInitialState = {
  name: {
    value: '',
    errors: new Set(),
    isTouched: false,
  },
  email: {
    value: '',
    errors: new Set(),
    isTouched: false,
  },
  message: {
    value: '',
    errors: new Set(),
    isTouched: false,
  },
};