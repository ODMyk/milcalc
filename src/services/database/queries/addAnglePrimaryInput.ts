export const addAnglePrimaryInputQuery = `
    INSERT INTO angles_primary (id, scenarioId, targetX, targetY, angle, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?);
`;
