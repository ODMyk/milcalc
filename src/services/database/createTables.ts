import {getConnection} from './connection';
import {createTablesQueries} from './queries/createTables';

export const createTables = async () => {
  const db = await getConnection();
  createTablesQueries.forEach(async query => await db.executeSql(query));
};
