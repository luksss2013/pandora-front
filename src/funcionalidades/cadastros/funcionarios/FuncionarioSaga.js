import { takeLatest, put, call } from "redux-saga/effects";
import { get } from '../../../services/api';
import { 
    fetchFuncionarios
 } from './FuncionarioActions';

function* funcionarioSaga() {
    yield takeLatest(fetchFuncionarios.TRIGGER, fetchFuncionarioRequest)
}

function* fetchFuncionarioRequest() {
   try {
       // trigger request action
       yield put(fetchFuncionarios.request());
       // perform request to an API to fetch data
       const response = yield call(get, '/funcionario');
       // if request successfully finished
       yield put(fetchFuncionarios.success(response.data._embedded.funcionarios))
   } catch(error) {
       yield put(fetchFuncionarios.failure(error));
   } finally {
       // trigger fulfill action
       yield put(fetchFuncionarios.fulfill())
   }
}

export default funcionarioSaga;