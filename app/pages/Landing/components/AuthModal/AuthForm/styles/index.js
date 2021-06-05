import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
  container: {
    margin: '1rem auto',
  },
  submitButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  submitButton: {
    margin: '1rem 0 0',
  },
}));
