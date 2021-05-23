import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from 'aws-amplify';

import Login from '../';
import awsconfig from '../../../aws-exports';

// beforeEach(() => {
//   Amplify.configure(awsconfig);
// })

describe('Login', () => {
  it('should render Login Page', () => {
    // render(
    //   <Router>
    //     <Login />
    //   </Router>
    // );
  })
})
