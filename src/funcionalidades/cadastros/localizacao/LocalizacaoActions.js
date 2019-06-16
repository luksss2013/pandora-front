import { createRoutine } from 'redux-saga-routines';

export const fetchLocalizacoes = createRoutine('FETCH_LOCALIZACOES');

export const changeModal = (modal) => ({
    type: 'CHANGE_MODAL',
    payload: modal,
});

export const createLocalizacaoTrigger = (localizacao) => ({
    type: 'CREATE_LOCALIZACAO/TRIGGER',
    payload: localizacao
});

export const getLocalizacaoTrigger = (id) => ({
    type: 'GET_LOCALIZACAO/TRIGGER',
    payload: id
});

export const updateLocalizacaoTrigger = (localizacao) => ({
    type: 'UPDATE_LOCALIZACAO/TRIGGER',
    payload: localizacao
})

export const updateLocalizacaoSuccess = (localizacao) => ({
    type: 'UPDATE_LOCALIZACAO/SUCCESS',
    payload: localizacao
})