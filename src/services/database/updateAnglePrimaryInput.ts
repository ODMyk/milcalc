import {AngleInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {updateAnglePrimaryInputQuery} from './queries/updateAnglePrimaryInput';

export type UpdateAnglePrimaryInputDto = Pick<
  AngleInput,
  'angle' | 'targetX' | 'targetY'
>;

export async function updateAnglePrimaryInput(
  id: string,
  dto: UpdateAnglePrimaryInputDto,
) {
  const connection = await getConnection();
  const updatedAt = new Date().toISOString();
  await connection.executeSql(updateAnglePrimaryInputQuery, [
    dto.targetX,
    dto.targetY,
    dto.angle,
    updatedAt,
    id,
  ]);
}
