import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';

enablePromise(true); // Ensure promises are enabled

let connection: SQLiteDatabase | null = null;

export const getConnection = async (): Promise<SQLiteDatabase> => {
  if (!connection) {
    connection = await openDatabase({name: 'database.db', location: 'default'});
  }
  return connection;
};

export const closeDb = async () => {
  if (connection) {
    await connection.close();
    connection = null;
  }
};
