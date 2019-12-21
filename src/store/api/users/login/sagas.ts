import { put, takeEvery } from 'redux-saga/effects'
import { Login } from './action-types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export default function* login() {
    console.log('saga login')
    yield delay(1000)
    console.log('saga login do')
    yield put({ type: Login.do })
}

// export function* watchLogin() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
//   }