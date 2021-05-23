import React from 'react';

import { Loading } from '../../components/Loading';

export const PageLoader: React.FC = ({ children }) => (
  <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
);
