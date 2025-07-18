import { call, put, takeLatest, type Effect } from 'redux-saga/effects';
import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from './userSlice';

import { http } from '@/@core/infra/http';
import { UserHttpGateway } from '@/@core/infra/gateways/user-http.gateway';
import { ListUsersUseCase } from '@/@core/application/user/list-users.use-case';

import type { User } from '@/@core/domain/entities/user';

function* fetchUsers(): Generator<Effect, void, User[]> {
  try {
    const userHttpGateway = new UserHttpGateway(http);
    const listUsersUseCase = new ListUsersUseCase(userHttpGateway);

    const response: User[] = yield call([
      listUsersUseCase,
      listUsersUseCase.execute,
    ]);

    yield put(fetchUsersSuccess(response.map((user) => user.toJSON())));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('>>> erro', error);
    yield put(fetchUsersFailure(error.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsers);
}
