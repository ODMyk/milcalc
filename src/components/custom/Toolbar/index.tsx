import React from 'react';

import {AdditionalToolbar} from './AdditionalToolbar';
import {MainToolbar} from './MainToolbar';

export function Toolbar() {
  return (
    <>
      <MainToolbar />
      <AdditionalToolbar />
    </>
  );
}
