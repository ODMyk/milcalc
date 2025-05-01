import {CalibrationMilsInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {updateCalibrationMilsInputQuery} from './queries/updateCalibrationMilsInput';

export type UpdateCalibrationMilsInputDto = Pick<
  CalibrationMilsInput,
  | 'angle'
  | 'targetX'
  | 'targetY'
  | 'actualX'
  | 'actualY'
  | 'isLeft'
  | 'isUnder'
  | 'diff'
>;

export async function updateCalibrationMilsInput(
  id: string,
  dto: UpdateCalibrationMilsInputDto,
) {
  const connection = await getConnection();
  const updatedAt = new Date().toISOString();
  await connection.executeSql(updateCalibrationMilsInputQuery, [
    dto.targetX,
    dto.targetY,
    dto.actualX,
    dto.actualY,
    dto.angle,
    dto.diff,
    dto.isLeft,
    dto.isUnder,
    updatedAt,
    id,
  ]);
}
