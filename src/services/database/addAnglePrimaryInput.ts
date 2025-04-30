import uuidGenerator from 'react-native-uuid';
import {AngleInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {addAnglePrimaryInputQuery} from './queries/addAnglePrimaryInput';

export async function addAnglePrimaryInput(
  scenarioId: string,
  dto: Omit<AngleInput, 'id'>,
) {
  const uuid = uuidGenerator.v4();

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const entity = {
    id: uuid,
    scenarioId,
    targetX: dto.targetX,
    targetY: dto.targetY,
    angle: dto.angle,
    createdAt,
    updatedAt,
  };

  const db = await getConnection();
  await db.executeSql(addAnglePrimaryInputQuery, [
    entity.id,
    scenarioId,
    entity.targetX,
    entity.targetY,
    entity.angle,
    entity.createdAt,
    entity.updatedAt,
  ]);
}
