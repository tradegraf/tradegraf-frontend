import * as Yup from 'yup';

export const defaultValues = { email: '' };

export const validationSchema = () =>
	Yup.object().shape({
		email: Yup.string().email('Invalid Email').required('This field is required'),
	});
