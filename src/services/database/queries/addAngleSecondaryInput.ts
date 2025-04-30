export const addAngleSecondaryInputQuery = `
    INSERT INTO angles_secondary (id, scenarioId, targetX, targetY, angle, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?);
`;
