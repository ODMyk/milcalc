export const createScenarioQuery = `
      INSERT INTO scenarios (id, title, zone, description, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
