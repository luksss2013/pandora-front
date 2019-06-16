export const fetchCalendarioPagamentoTrigger = () => ({
    type: 'FETCH_CALENDARIO_PAGAMENTO/TRIGGER'
});

export const fetchCalendarioPagamentoSuccess = (calendarioPagamento) => ({
    type: 'FETCH_CALENDARIO_PAGAMENTO/SUCCESS',
    payload: calendarioPagamento
});

export const changeModal = (modal) => ({
    type: 'CHANGE_MODAL',
    payload: modal
});

export const addCalendarioPagamentoTrigger = (calendarioPagamento) => ({
    type: 'ADD_CALENDARIO_PAGAMENTO/TRIGGER',
    payload: calendarioPagamento
})

export const addCalendarioPagamentoSuccess = (calendarioPagamento) => ({
    type: 'ADD_CALENDARIO_PAGAMENTO/SUCCESS',
    payload: calendarioPagamento
})