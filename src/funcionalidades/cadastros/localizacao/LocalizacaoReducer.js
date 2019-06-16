import { fetchLocalizacoes } from './LocalizacaoActions';
import { getLocalizacao } from './LocalizacaoActions';

const initialState = {
  localizacoes: [],
  isLoading: false,
  error: null,
  modal: {
    isCreateOpen: false,
    isEditOpen: false
  }
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
    case 'GET_LOCALIZACAO/SUCCESS':
      return {
        ...state,
        localizacao: action.payload
      }
    case 'UPDATE_LOCALIZACAO/SUCCESS':
      return {
        ...state,
        localizacoes: state.localizacoes.map(localizacao => {

          if (localizacao.id != action.payload.id) {
            return localizacao
          }

          return {
            ...localizacao,
            ...action.payload
          }
        })
      }
    case 'CHANGE_MODAL':
      return {
        ...state,
        modal: {
          ...action.payload
        }
      }
    default:
      return state
  }
}

export default localizacaoReducer;