import * as Yup from 'yup';

export default Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/,
      'Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special case character',
    ),
});
