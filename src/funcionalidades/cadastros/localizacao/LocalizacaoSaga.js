import { takeLatest, put, call, take } from "redux-saga/effects";
import { get, post, update } from '../../../services/api';
import {
    fetchLocalizacoes,
    updateLocalizacaoSuccess
} from './LocalizacaoActions';
import { message } from 'antd';

export const localizacaoSaga = [
    takeLatest(fetchLocalizacoes.TRIGGER, fetchLocalizacaoRequest),
    takeLatest('GET_LOCALIZACAO/TRIGGER', getLocalizacaoRequest),
    takeLatest('CREATE_LOCALIZACAO/TRIGGER', criarLocalizacaoRequest),
    takeLatest('UPDATE_LOCALIZACAO/TRIGGER', updateLocalizacaoRequest),
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
    const id = action.payload;

    try {
        const response = yield call(get, '/localizacao/' + id);
        yield put({ type: 'GET_LOCALIZACAO/SUCCESS', payload: response.data })
        yield put({ type: 'CHANGE_MODAL', payload: { isEditOpen: true } })
    } catch (error) {
        message.error('Ocorreu um erro ao buscar a localização')
    }
}

function* criarLocalizacaoRequest(action) {
    try {
        yield call(post, '/localizacao', action.payload);

        yield put({
            type: 'CHANGE_MODAL',
            payload: {
                isCreateOpen: false
            }
        });

        yield call(fetchLocalizacaoRequest);

        message.success('Endereço adicionado com sucesso !');
    } catch (error) {
        message.error('Ocorreu um erro na gravação');
    }
}

function* updateLocalizacaoRequest(action) {
    try {
        const response = yield call(update, '/localizacao/' + action.payload.id, action.payload);

        yield put({
            type: 'CHANGE_MODAL',
            payload: {
                isEditOpen: false
            }
        });

        yield put(updateLocalizacaoSuccess(response.data));

        message.success('Localização alterada com sucesso');
    } catch (error) {
        console.log(error)
        message.error('Erro ao alterar a localização');
    }
}