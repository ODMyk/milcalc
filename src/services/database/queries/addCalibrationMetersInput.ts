export const addCalibrationMetersInputQuery = `
    INSERT INTO calibration_meters (id, scenarioId, targetX, targetY, actualX, actualY, diff, distance, isLeft, isUnder, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;
