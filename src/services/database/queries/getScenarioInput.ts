export const getAnglesPrimaryQuery = `
    SELECT * FROM angles_primary WHERE scenarioId = ?;
`;

export const getAnglesSecondaryQuery = `
    SELECT * FROM angles_secondary WHERE scenarioId = ?;
`;

export const getCalibrationMilsQuery = `
    SELECT * FROM calibration_mils WHERE scenarioId = ?;
`;

export const getCalibrationMetersQuery = `
    SELECT * FROM calibration_meters WHERE scenarioId = ?;
`;
