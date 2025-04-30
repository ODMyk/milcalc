export const addCalbrationMilsInputQuery = `
    INSERT INTO calibration_mils (id, scenarioId, targetX, targetY, actualX, actualY, diff, angle, isLeft, isUnder, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
`;
