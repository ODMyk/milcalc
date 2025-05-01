import {getConnection} from './connection';
import {deleteCalibrationMetersInputQuery} from './queries/deleteCalibrationMetersInput';

export async function deleteCalibrationMetersInput(id: string) {
  const connection = await getConnection();
  await connection.executeSql(deleteCalibrationMetersInputQuery, [id]);
}
