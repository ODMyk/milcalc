import uuidGenerator from 'react-native-uuid';
import {CreateScenarioDto} from 'src/types/Scenario';

import {getConnection} from './connection';
import {createScenarioQuery} from './queries/createScenario';

export const createScenario = async (dto: CreateScenarioDto) => {
  const uuid = uuidGenerator.v4();
  const {title, description, variant} = dto;
  const createdAt = new Date().toISOString();

  const entity = {
    id: uuid,
    title,
    description: description || '',
    variant,
    createdAt,
    updatedAt: createdAt,
  };

  const db = await getConnection();

  await db.executeSql(createScenarioQuery, [
    entity.id,
    entity.title,
    entity.description,
    entity.variant,
    entity.createdAt,
    entity.updatedAt,
  ]);

  return entity;
};
