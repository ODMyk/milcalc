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
