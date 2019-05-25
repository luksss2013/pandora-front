import { fetchLocalizacoes } from './LocalizacaoActions';

const initialState = {
  localizacoes: [],
  isLoading: false,
  error: null,
  isModalOpen: false
}

const localizacaoReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case fetchLocalizacoes.TRIGGER:
      return {
        ...state,
        isLoading: true
      };
    case 'CREATE_LOCALIZACAO/TRIGGER':
      return {
        ...state
      };
    case 'CREATE_LOCALIZACAO/SUCCESS':
      return {
        ...state
      };
    case 'CHANGE_MODAL':
      return {
        ...state,
        isModalOpen: action.payload
      }
    default:
      return state
  }
}

export default localizacaoReducer;