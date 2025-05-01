export const updateAngleSecondaryInputQuery = `
    UPDATE angles_secondary SET targetX = ?, targetY = ?, angle = ?, updatedAt = ? WHERE id = ?;
`;
