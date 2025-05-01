export const updateCalibrationMetersInputQuery = `
    UPDATE calibration_meters SET targetX = ?, targetY = ?, actualX = ?, actualY = ?, distance = ?, diff = ?, isLeft = ?, isUnder = ?, updatedAt = ? WHERE id = ?;
`;
