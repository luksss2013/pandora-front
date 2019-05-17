import React, { Component } from 'react';
import Funcionarios from './Funcionarios';
import { connect } from 'react-redux';
import { fetchFuncionarios } from './FuncionarioActions';

  const columns = [{
    title: 'Nome',
    className: 'nome',
    dataIndex: 'nome',
  }];

class FuncionariosContainer extends Component {
  componentDidMount() {
    this.props.fetchFuncionarios();
  }

    render() {
      const { 
        isLoading,
        funcionarios,
        error
      } = this.props

        return(
            <div>
                { (isLoading) ? 'Carregando...' : <Funcionarios columns={columns} data={funcionarios} /> }
            </div>
        )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      funcionarios: state.funcionarioReducer.funcionarios,
      isLoading: state.funcionarioReducer.isLoading,
      error: state.funcionarioReducer.error
    };
  }
  const mapDispatchToProps = {
    fetchFuncionarios,
  };

 export default connect(
   mapStateToProps, 
   mapDispatchToProps
)(FuncionariosContainer);
