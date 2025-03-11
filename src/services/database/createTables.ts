import {getConnection} from './connection';
import {createTablesQuery} from './queries/createTables';

export const createTables = async () => {
  const db = await getConnection();
  await db.executeSql(createTablesQuery);
};
