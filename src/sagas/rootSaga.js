import { all, fork } from "redux-saga/effects";
import { funcionarioSaga } from "../funcionalidades/cadastros/funcionarios/FuncionarioSaga";
import { localizacaoSaga } from "../funcionalidades/cadastros/localizacao/LocalizacaoSaga";
import { calendarioPagamentoSaga } from "../funcionalidades/cadastros/calendario-pagamento/CalendarioPagamentoSaga";

export default function* rootSaga() {
    yield all([
        ...funcionarioSaga,
        ...localizacaoSaga,
        ...calendarioPagamentoSaga
    ]);
}