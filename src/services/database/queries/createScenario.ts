export const createScenarioQuery = `
      INSERT INTO scenarios (id, title, description, variant, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
