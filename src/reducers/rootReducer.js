import { combineReducers } from 'redux';
import funcionarioReducer from '../funcionalidades/cadastros/funcionarios/FuncionarioReducer';
import localizacaoReducer from '../funcionalidades/cadastros/localizacao/LocalizacaoReducer';
import calendarioPagamentoReducer from '../funcionalidades/cadastros/calendario-pagamento/CalendarioPagamentoReducer';

export default combineReducers({
    funcionarioReducer: funcionarioReducer,
    localizacaoReducer: localizacaoReducer,
    calendarioPagamentoReducer: calendarioPagamentoReducer
})