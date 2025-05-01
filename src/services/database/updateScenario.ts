import {Scenario} from 'src/types/Scenario';

import {getConnection} from './connection';
import {updateScenarioQuery} from './queries/updateScenario';

export type UpdateScenarioDto = Pick<Scenario, 'title' | 'description'>;

export async function updateScenario(id: string, dto: UpdateScenarioDto) {
  const connection = await getConnection();
  const updatedAt = new Date().toISOString();
  await connection.executeSql(updateScenarioQuery, [
    dto.title,
    dto.description,
    updatedAt,
    id,
  ]);
}
