import {DatabaseService} from '@services/database';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {getErrorMessage} from '@store/utils/errors';
import {call, put, SagaReturnType} from 'redux-saga/effects';

const actionCreate = ScenariosScreenActions.CREATE_SCENARIO.START.create;

export function* createScenarioSaga({
  payload: dto,
}: ReturnType<typeof actionCreate>) {
  try {
    const newScenario: SagaReturnType<typeof DatabaseService.createScenario> =
      yield call(DatabaseService.createScenario, dto);

    yield put(
      ScenariosScreenActions.CREATE_SCENARIO.SUCCESS.create(newScenario),
    );
  } catch (error) {
    console.error(error);
    yield put(
      ScenariosScreenActions.CREATE_SCENARIO.FAILED.create({
        errorMessage: getErrorMessage(error),
      }),
    );
  }
}
