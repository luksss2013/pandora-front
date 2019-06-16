import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCalendarioPagamentoSuccess, addCalendarioPagamentoSuccess } from "./CalendarioPagamentoActions";
import { message } from "antd";
import { get, post } from "../../../services/api";

export const calendarioPagamentoSaga = [
    takeLatest('FETCH_CALENDARIO_PAGAMENTO/TRIGGER', fetchCalendarioPagamentoRequest),
    takeLatest('FETCH_CALENDARIO_PAGAMENTO/ADD', addCalendarioPagamentoRequest)
]

function* fetchCalendarioPagamentoRequest() {
    try {
        const response = yield call(get, '/calendario-pagamento');
        yield put(fetchCalendarioPagamentoSuccess(response.data));
    } catch (error) {
        console.log(error)
        message.error("Erro ao requisitar Calendario Pagamento");
    }
}

function* addCalendarioPagamentoRequest() {
    try {
        const response = yield call(post, '/calendario-pagamento', calendarioPagamento);

        yield put(addCalendarioPagamentoSuccess(response.data));
        message.success("Calendário pagamento criado !");
    } catch (error) {
        console.log(error);
        message.error('Erro ao cadastrar calendário pagamento');
    }
}