import axios from 'axios'
import { ForkEffect, call, put, takeEvery } from 'redux-saga/effects'
import { getUsers } from './features/posts/usersSlice'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function* workGetUsers() : Generator<any, any, any>{
    const response = yield call(()=> axios.get(USERS_URL))
    const users = yield response.data
    yield put(getUsers(users))
}

function* usersSaga() : Generator<ForkEffect<never>, void, unknown> {
    yield takeEvery('users/getUsersFetch', workGetUsers)
}

export default usersSaga