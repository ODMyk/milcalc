import {DatabaseService} from '@services/database';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {getErrorMessage} from '@store/utils/errors';
import {call, put, SagaReturnType} from 'redux-saga/effects';

export function* fetchScenariosSaga() {
  try {
    const list: SagaReturnType<typeof DatabaseService.getScenarios> =
      yield call(DatabaseService.getScenarios);

    yield put(ScenariosScreenActions.FETCH_SCENARIOS.SUCCESS.create(list));
  } catch (error) {
    console.error(error);
    yield put(
      ScenariosScreenActions.FETCH_SCENARIOS.FAILED.create({
        errorMessage: getErrorMessage(error),
      }),
    );
  }
}
