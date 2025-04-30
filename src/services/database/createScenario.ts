import uuidGenerator from 'react-native-uuid';
import {CreateScenarioDto} from 'src/types/Scenario';

import {getConnection} from './connection';
import {createScenarioQuery} from './queries/createScenario';

export const createScenario = async (
  dto: CreateScenarioDto & {zone: number},
) => {
  const uuid = uuidGenerator.v4();
  const {title, description} = dto;
  const createdAt = new Date().toISOString();

  const entity = {
    id: uuid,
    title,
    zone: dto.zone,
    description: description || '',
    createdAt,
    updatedAt: createdAt,
  };

  const db = await getConnection();

  await db.executeSql(createScenarioQuery, [
    entity.id,
    entity.title,
    entity.zone,
    entity.description,
    entity.createdAt,
    entity.updatedAt,
  ]);

  return entity;
};
