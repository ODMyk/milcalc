export type Scenario = {
  title: string;
  zone: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
} & WithId;

export type CreateScenarioDto = Omit<
  Scenario,
  'id' | 'createdAt' | 'updatedAt'
>;

export interface WithId {
  id: string;
}

export type AngleInput = {
  targetX: number;
  targetY: number;
  angle: number;
} & WithId;

export type CalibrationInputBase = {
  targetX: number;
  targetY: number;
  actualX: number;
  actualY: number;
  isLeft: boolean;
  isUnder: boolean;
  diff: number;
} & WithId;

export type CalibrationMilsInput = CalibrationInputBase & {
  angle: number;
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

export type ScenarioWithDetails = Scenario & ScenarioDetails;
