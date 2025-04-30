import uuidGenerator from 'react-native-uuid';
import {CalibrationMilsInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {addCalbrationMilsInputQuery} from './queries/addCalibrationMilsInput';

export async function addCalibrationMilsInput(
  scenarioId: string,
  dto: CalibrationMilsInput,
) {
  const uuid = uuidGenerator.v4();

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const entity = {
    id: uuid,
    scenarioId,
    targetX: dto.targetX,
    targetY: dto.targetY,
    actualX: dto.actualX,
    actualY: dto.actualY,
    isLeft: dto.isLeft,
    isUnder: dto.isUnder,
    angle: dto.angle,
    diff: dto.diff,
    createdAt,
    updatedAt,
  };

  const db = await getConnection();
  await db.executeSql(addCalbrationMilsInputQuery, [
    entity.id,
    scenarioId,
    entity.targetX,
    entity.targetY,
    entity.actualX,
    entity.actualY,
    entity.diff,
    entity.angle,
    entity.isLeft,
    entity.isUnder,
    entity.createdAt,
    entity.updatedAt,
  ]);
}
