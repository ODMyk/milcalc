import {getConnection} from './connection';
import {deleteAngleSecondaryInputQuery} from './queries/deleteAngleSecondaryInput';

export async function deleteAngleSecondaryInput(id: string) {
  const connection = await getConnection();
  await connection.executeSql(deleteAngleSecondaryInputQuery, [id]);
}
