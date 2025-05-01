export const updateScenarioQuery = `
    UPDATE scenarios SET title = ?, description = ?, updatedAt = ? WHERE id = ?;
`;
