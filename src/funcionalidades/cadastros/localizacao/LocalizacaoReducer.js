import { fetchLocalizacoes } from './LocalizacaoActions';

const initialState = {
  localizacoes: [],
  isLoading: false,
  error: null
}

const localizacaoReducer = (state = initialState, action) => {
  switch(action.type) {
      case fetchLocalizacoes.TRIGGER:
        return {
          ...state,
          isLoading: true
        };
      case fetchLocalizacoes.SUCCESS:
        return {
          ...state,
          localizacoes: action.payload
        };
      case fetchLocalizacoes.FAILURE:
        return {
          ...state,
          error: action.payload
        };
      case fetchLocalizacoes.FULFILL:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state
  }
}

export default localizacaoReducer;