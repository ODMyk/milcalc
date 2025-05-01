import {
  isAngleInput,
  isCalibrationMetersInput,
  isCalibrationMilsInput,
} from '@components/custom/Toolbar/MainToolbar/components/InputTab';
import {editingInputSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {useSelector} from 'react-redux';

import {EditAngleInput} from './components/EditAngleInput';
import {EditCalibrationInput} from './components/EditCalibrationInput';

export function EditScenarioInput() {
  const itemToEdit = useSelector(editingInputSelector);

  if (!itemToEdit) {
    return null;
  }

  if (isAngleInput(itemToEdit)) {
    return <EditAngleInput {...itemToEdit} />;
  }

  if (
    isCalibrationMilsInput(itemToEdit) ||
    isCalibrationMetersInput(itemToEdit)
  ) {
    return <EditCalibrationInput {...itemToEdit} />;
  }

  return null;
}
