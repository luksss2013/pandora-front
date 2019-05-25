import { takeLatest, put, call, take } from "redux-saga/effects";
import { get, post } from '../../../services/api';
import {
    fetchLocalizacoes,
    getLocalizacao,
    createLocalizacao
} from './LocalizacaoActions';
import { message } from 'antd';

export const localizacaoSaga = [
    takeLatest(fetchLocalizacoes.TRIGGER, fetchLocalizacaoRequest),
    takeLatest(getLocalizacao.TRIGGER, getLocalizacaoRequest),
    takeLatest('CREATE_LOCALIZACAO/TRIGGER', criarLocalizacaoRequest),

]

function* fetchLocalizacaoRequest() {
    try {
        yield put(fetchLocalizacoes.request());
        const response = yield call(get, '/localizacao');
        yield put(fetchLocalizacoes.success(response.data._embedded.localizacoes))
    } catch (error) {
        yield put(fetchLocalizacoes.failure(error));
    } finally {
        yield put(fetchLocalizacoes.fulfill())
    }
}

function* getLocalizacaoRequest(action) {
    const { id } = action.payload;

    try {
        const response = yield call(get, '/localizacao/' + id);
        yield put(fetchLocalizacoes.success(response.data._embedded.localizacoes))
    } catch (error) {
        yield put(fetchLocalizacoes.failure(error));
    } finally {
        yield put(fetchLocalizacoes.fulfill())
    }
}

function* criarLocalizacaoRequest(action) {
    try {
        yield call(post, '/localizacao', action.payload);

        yield put({
            type: 'CREATE_LOCALIZACAO/SUCCESS'
        })

        yield put({
            type: 'CHANGE_MODAL',
            payload: false
        });

        yield call(fetchLocalizacaoRequest);

        message.success('Endereço adicionado com sucesso !');
    } catch (error) {
        message.error('Ocorreu um erro na gravação');
    }
}