import * as Yup from 'yup';

export default Yup.object({
	email: Yup.string().email('Invalid email address').required('Required'),
});
