import {getConnection} from './connection';
import {updateAngleSecondaryInputQuery} from './queries/updateAngleSecondaryInput';
import {UpdateAnglePrimaryInputDto} from './updateAnglePrimaryInput';

export async function updateAngleSecondaryInput(
  id: string,
  dto: UpdateAnglePrimaryInputDto,
) {
  const connection = await getConnection();
  const updatedAt = new Date().toISOString();
  await connection.executeSql(updateAngleSecondaryInputQuery, [
    dto.targetX,
    dto.targetY,
    dto.angle,
    updatedAt,
    id,
  ]);
}
