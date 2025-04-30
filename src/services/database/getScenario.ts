import {Scenario} from 'src/types/Scenario';

import {getConnection} from './connection';
import {getScenarioQuery} from './queries/getScenario';

export const getScenarioById = async (id: string) => {
  const db = await getConnection();
  const res = await db.executeSql(getScenarioQuery, [id]);
  return res[0].rows.raw().at(0) as Scenario;
};
