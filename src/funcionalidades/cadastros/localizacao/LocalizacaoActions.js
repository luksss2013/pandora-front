import { createRoutine } from 'redux-saga-routines';

export const fetchLocalizacoes = createRoutine('FETCH_LOCALIZACOES');
export const getLocalizacao = createRoutine('GET_LOCALIZACAO');

export const changeModal = isOpen => ({
    type: 'CHANGE_MODAL',
    payload: isOpen,
})

export const createLocalizacaoTrigger = (localizacao) => ({
    type: 'CREATE_LOCALIZACAO/TRIGGER',
    payload: localizacao
})