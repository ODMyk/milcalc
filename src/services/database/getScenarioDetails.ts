import {
  AngleInput,
  CalibrationMetersInput,
  CalibrationMilsInput,
} from 'src/types/Scenario';

import {getConnection} from './connection';
import {
  getAnglesPrimaryQuery,
  getAnglesSecondaryQuery,
  getCalibrationMetersQuery,
  getCalibrationMilsQuery,
} from './queries/getScenarioInput';

export const getScenarioDetails = async (id: string) => {
  const db = await getConnection();
  const res = await Promise.all([
    db.executeSql(getAnglesPrimaryQuery, [id]),
    db.executeSql(getAnglesSecondaryQuery, [id]),
    db.executeSql(getCalibrationMilsQuery, [id]),
    db.executeSql(getCalibrationMetersQuery, [id]),
  ]);

  return {
    anglesPrimary: res.at(0)?.at(0)?.rows.raw() as AngleInput[],
    anglesSecondary: res.at(1)?.at(0)?.rows.raw() as AngleInput[],
    calibrationMils: res.at(2)?.at(0)?.rows.raw() as CalibrationMilsInput[],
    calibrationMeters: res.at(3)?.at(0)?.rows.raw() as CalibrationMetersInput[],
  };
};
