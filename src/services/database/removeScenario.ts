import {getConnection} from './connection';
import {removeScenarioQuery} from './queries/removeSceanrio';

export const removeScenario = async (id: string) => {
  const db = await getConnection();
  await db.executeSql(removeScenarioQuery, [id]);
};
