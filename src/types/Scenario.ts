export type Scenario = {
  id: string;
  variant: ScenarioVariant;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export enum ScenarioVariant {
  ANGLES = 'angles',
  CALIBRATION = 'calibration',
}

export type ScenarioState = {
  scenario: Scenario;
  //   points: Point[];
  //   lines: Line[];
};

export type CreateScenarioDto = Omit<
  Scenario,
  'id' | 'createdAt' | 'updatedAt' | 'description'
> & {
  description?: Scenario['description'];
};

export type Angle = `${number}-${number}`;

export type MilsCoordinates = Angle;

type Point = {
  x: MilsCoordinates;
  y: MilsCoordinates;
};

export type AngleInput = {
  target: Point;
  alpha: Angle;
};

export type CalibrationInputBase = {
  target: Point;
  isLeft: boolean;
  isUnder: boolean;
  diff: number;
};

export type CalibrationMilsInput = CalibrationInputBase & {
  angle: Angle;
};

export type CalibrationMetersInput = CalibrationInputBase & {
  distance: number;
};

export type ScenarioDetails = {
  anglesPrimary: AngleInput[];
  anglesSecondary: AngleInput[];
  calibrationMeters: CalibrationMetersInput[];
  calibrationMils: CalibrationMilsInput[];
};
