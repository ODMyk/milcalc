import {getConnection} from './connection';
import {deleteCalibrationMilsInputQuery} from './queries/deleteCalibrationMilsInput';

export async function deleteCalibrationMilsInput(id: string) {
  const connection = await getConnection();
  await connection.executeSql(deleteCalibrationMilsInputQuery, [id]);
}
