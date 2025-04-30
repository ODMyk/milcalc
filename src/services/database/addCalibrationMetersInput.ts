import uuidGenerator from 'react-native-uuid';
import {CalibrationMetersInput} from 'src/types/Scenario';

import {getConnection} from './connection';
import {addCalibrationMetersInputQuery} from './queries/addCalibrationMetersInput';

export async function addCalibrationMetersInput(
  scenarioId: string,
  dto: CalibrationMetersInput,
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
    distance: dto.distance,
    diff: dto.diff,
    createdAt,
    updatedAt,
  };

  const db = await getConnection();
  await db.executeSql(addCalibrationMetersInputQuery, [
    entity.id,
    scenarioId,
    entity.targetX,
    entity.targetY,
    entity.actualX,
    entity.actualY,
    entity.diff,
    entity.distance,
    entity.isLeft,
    entity.isUnder,
    entity.createdAt,
    entity.updatedAt,
  ]);
}
