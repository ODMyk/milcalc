import {getConnection} from './connection';
import {deleteAnglePrimaryInputQuery} from './queries/deleteAnglePrimaryInput';

export async function deleteAnglePrimaryInput(id: string) {
  const connection = await getConnection();
  await connection.executeSql(deleteAnglePrimaryInputQuery, [id]);
}
