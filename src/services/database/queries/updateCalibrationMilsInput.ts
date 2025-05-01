export const updateCalibrationMilsInputQuery = `
    UPDATE calibration_mils SET targetX = ?, targetY = ?, actualX = ?, actualY = ?, angle = ?, diff = ?, isLeft = ?, isUnder = ?, updatedAt = ? WHERE id = ?;
`;
