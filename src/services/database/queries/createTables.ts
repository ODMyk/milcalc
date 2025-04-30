export const createTablesQueries = [
  `
    CREATE TABLE IF NOT EXISTS scenarios (
        id TEXT PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        zone INTEGER NOT NULL,
        description TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
    );`,
  `   
    CREATE TABLE IF NOT EXISTS angles_primary (
        id TEXT PRIMARY KEY NOT NULL,
        scenarioId TEXT NOT NULL REFERENCES scenarios (id),
        targetX NUMERIC NOT NULL,
        targetY NUMERIC NOT NULL,
        angle NUMERIC NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS angles_secondary (
        id TEXT PRIMARY KEY NOT NULL,
        scenarioId TEXT NOT NULL REFERENCES scenarios (id),
        targetX NUMERIC NOT NULL,
        targetY NUMERIC NOT NULL,
        angle NUMERIC NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS calibration_mils (
        id TEXT PRIMARY KEY NOT NULL,
        scenarioId TEXT NOT NULL REFERENCES scenarios (id),
        targetX NUMERIC NOT NULL,
        targetY NUMERIC NOT NULL,
        actualX NUMERIC NOT NULL,
        actualY NUMERIC NOT NULL,
        diff NUMERIC NOT NULL,
        angle NUMERIC NOT NULL,
        isLeft BOOLEAN NOT NULL,
        isUnder BOOLEAN NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
    );`,
  `
    CREATE TABLE IF NOT EXISTS calibration_meters (
        id TEXT PRIMARY KEY NOT NULL,
        scenarioId TEXT NOT NULL REFERENCES scenarios (id),
        targetX NUMERIC NOT NULL,
        targetY NUMERIC NOT NULL,
        actualX NUMERIC NOT NULL,
        actualY NUMERIC NOT NULL,
        diff NUMERIC NOT NULL,
        distance NUMERIC NOT NULL,
        isLeft BOOLEAN NOT NULL,
        isUnder BOOLEAN NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
    );`,
];
