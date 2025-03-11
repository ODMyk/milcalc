import {Typography} from '@components/core/Typography';
import {DefaultScreen} from '@components/layout/DefaultScreen';
import React from 'react';

import {useStyles} from './styles';

export function Saved() {
  const styles = useStyles();

  return (
    <DefaultScreen>
      <Typography.Header center>Saved</Typography.Header>
    </DefaultScreen>
  );
}
