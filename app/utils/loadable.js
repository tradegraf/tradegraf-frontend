import React from 'react';
import loadable from '@loadable/component';

import { SPINNER } from '@app/shared/constants';
import { FullpageSpinner, DefaultSpinner } from '@app/components/Spinner';
import LogoSpinner from '@app/components/LogoSpinner';

const Loadable = (importFunction, spinnerType = SPINNER.DEFAULT, options) => {
  let fallback;
  switch (spinnerType) {
    case SPINNER.DEFAULT:
      fallback = <LogoSpinner />;
      break;
    case SPINNER.FULL_PAGE:
      fallback = <FullpageSpinner />;
      break;
    case SPINNER.EMPTY:
      fallback = <></>;
      break;
    default:
      fallback = <DefaultSpinner />;
      break;
  }
  const newOptions = {
    fallback,
    ...options,
  };
  return loadable(importFunction, newOptions);
};

export default Loadable;
