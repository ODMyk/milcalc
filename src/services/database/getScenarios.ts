import {Scenario} from 'src/types/Scenario';

import {getConnection} from './connection';
import {getScenariosQuery} from './queries/getScenarios';

export const getScenarios = async () => {
  const db = await getConnection();
  const res = await db.executeSql(getScenariosQuery);
  return res[0].rows.raw() as Scenario[];
};
