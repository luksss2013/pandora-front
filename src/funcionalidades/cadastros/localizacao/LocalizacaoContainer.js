import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchLocalizacoes } from './LocalizacaoActions';
import Localizacao from './Localizacao';
import { changeModal } from './LocalizacaoActions';

class LocalizacaoContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchLocalizacoes();
  }

  openModal = () => {
    this.props.changeModal(true);
  }

  render() {
    const { localizacoes, isLoading } = this.props;

    return (
      <div>
        <Localizacao localizacoes={localizacoes} isLoading={isLoading} openModal={this.openModal} />
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
  changeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalizacaoContainer);
