import {DatabaseService} from '@services/database';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {getErrorMessage} from '@store/utils/errors';
import {call, put} from 'redux-saga/effects';

const actionCreate = ScenariosScreenActions.REMOVE_SCENARIO.START.create;

export function* removeScenarioSaga({
  payload: uuid,
}: ReturnType<typeof actionCreate>) {
  try {
    yield call(DatabaseService.removeScenario, uuid);
    yield put(ScenariosScreenActions.REMOVE_SCENARIO.SUCCESS.create(uuid));
  } catch (error) {
    yield put(
      ScenariosScreenActions.REMOVE_SCENARIO.FAILED.create({
        errorMessage: getErrorMessage(error),
      }),
    );
  }
}
