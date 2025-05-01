import {CalibrationMetersInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {updateCalibrationMilsInputQuery} from './queries/updateCalibrationMilsInput';

export type UpdateCalibrationMetersInputDto = Pick<
  CalibrationMetersInput,
  | 'distance'
  | 'targetX'
  | 'targetY'
  | 'actualX'
  | 'actualY'
  | 'isLeft'
  | 'isUnder'
  | 'diff'
>;

export async function updateCalibrationMetersInput(
  id: string,
  dto: UpdateCalibrationMetersInputDto,
) {
  const connection = await getConnection();
  const updatedAt = new Date().toISOString();
  await connection.executeSql(updateCalibrationMilsInputQuery, [
    dto.targetX,
    dto.targetY,
    dto.actualX,
    dto.actualY,
    dto.distance,
    dto.diff,
    dto.isLeft,
    dto.isUnder,
    updatedAt,
    id,
  ]);
}
