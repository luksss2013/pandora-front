import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchLocalizacoes } from './LocalizacaoActions';
import Localizacao from './Localizacao';
import { changeModal, getLocalizacaoTrigger } from './LocalizacaoActions';

class LocalizacaoContainer extends PureComponent {
  componentDidMount() {
    this.props.fetchLocalizacoes();
  }

  openCreateModal = () => {
    this.props.changeModal({
      isCreateOpen: true
    });
  }

  openEditModal = (id) => {
    this.props.getLocalizacaoTrigger(id);
  }

  render() {
    const { localizacoes, isLoading } = this.props;

    return (
      <Localizacao
        localizacoes={localizacoes}
        isLoading={isLoading}
        openEditModal={this.openEditModal}
        openCreateModal={this.openCreateModal}
      />
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
  getLocalizacaoTrigger,
  fetchLocalizacoes,
  changeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalizacaoContainer);
