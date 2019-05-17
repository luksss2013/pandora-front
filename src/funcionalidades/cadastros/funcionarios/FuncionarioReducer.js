import { fetchFuncionarios } from './FuncionarioActions';

const initialState = {
  funcionarios: [],
  isLoading: false,
  error: null
}

const funcionarioReducer = (state = initialState, action) => {
  switch(action.type) {
      case fetchFuncionarios.TRIGGER:
        return {
          ...state,
          isLoading: true
        };
      case fetchFuncionarios.SUCCESS:
        return {
          ...state,
          funcionarios: action.payload
        };
      case fetchFuncionarios.FAILURE:
        return {
          ...state,
          error: action.payload
        };
      case fetchFuncionarios.FULFILL:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state
  }
}

export default funcionarioReducer