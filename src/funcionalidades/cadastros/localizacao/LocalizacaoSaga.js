import { takeLatest, put, call } from "redux-saga/effects";
import { get } from '../../../services/api';
import { 
    fetchLocalizacoes
 } from './LocalizacaoActions';

 function* localizacaoSaga() {
    yield takeLatest(fetchLocalizacoes.TRIGGER, fetchLocalizacaoRequest)
}

function* fetchLocalizacaoRequest() {
   try {
       // trigger request action
       yield put(fetchLocalizacoes.request());
       // perform request to an API to fetch data
       const response = yield call(get, '/localizacao');
       // if request successfully finished
       yield put(fetchLocalizacoes.success(response.data._embedded.localizacoes))
   } catch(error) {
       yield put(fetchLocalizacoes.failure(error));
   } finally {
       // trigger fulfill action
       yield put(fetchLocalizacoes.fulfill())
   }
}

export default localizacaoSaga;