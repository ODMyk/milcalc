export const updateAnglePrimaryInputQuery = `
    UPDATE angles_primary SET targetX = ?, targetY = ?, angle = ?, updatedAt = ? WHERE id = ?;
`;
