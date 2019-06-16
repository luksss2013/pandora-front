const initialState = {
    calendarioPagamento: null,
    modal: {
        isCreateOpen: false,
        isEditOpen: false
    }
}

const calendarioPagamentoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CALENDARIO_PAGAMENTO/SUCCESS':
            return {
                ...state,
                calendarioPagamento: action.payload
            };
        case 'CHANGE_MODAL':
            return {
                ...state,
                modal: {
                    ...action.payload
                }
            };
        default:
            return state;
    }
}

export default calendarioPagamentoReducer;