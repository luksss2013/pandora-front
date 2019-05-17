import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLocalizacoes } from './LocalizacaoActions';

class LocalizacaoContainer extends Component {
  componentDidMount() {
    this.props.fetchLocalizacoes();
  }

    render() {
        return(
            <div>
               {this.props.localizacoes.map((localizacao) => <div>{localizacao}</div>)}
            </div>
        )
    }
  }

const mapStateToProps = (state) => {
  return {
    localizacoes: state.localizacaoReducer.localizacoes,
    isLoading: state.localizacaoReducer.isLoading,
    error: state.localizacaoReducer.error
  };
}

const mapDispatchToProps = {
  fetchLocalizacoes,
};

export default connect(
   mapStateToProps, 
   mapDispatchToProps
)(LocalizacaoContainer);
