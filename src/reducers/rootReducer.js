import { combineReducers } from 'redux'
import funcionarioReducer from '../funcionalidades/cadastros/funcionarios/FuncionarioReducer'
import localizacaoReducer from '../funcionalidades/cadastros/localizacao/LocalizacaoReducer'

export default combineReducers({
    funcionarioReducer: funcionarioReducer,
    localizacaoReducer: localizacaoReducer
})