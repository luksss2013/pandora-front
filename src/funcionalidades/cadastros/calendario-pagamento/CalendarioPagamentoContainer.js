import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCalendarioPagamentoTrigger, addCalendarioPagamentoTrigger, changeModal } from "./CalendarioPagamentoActions";
import CalendarioPagamento from "./CalendarioPagamento";

class CalendarioPagamentoContainer extends PureComponent {
    componentDidMount() {
        this.props.fetchCalendarioPagamentoTrigger();
    }

    render() {
        const { calendarioPagamento, modal, changeModal, addCalendarioPagamentoTrigger } = this.props;

        return (
            <CalendarioPagamento
                calendarioPagamento={calendarioPagamento}
                modal={modal}
                changeModal={changeModal}
                addCalendarioPagamentoTrigger={addCalendarioPagamentoTrigger} />
        )
    }
}

const mapStateToProps = state => {
    return {
        calendarioPagamento: state.calendarioPagamentoReducer.calendarioPagamento,
        modal: state.calendarioPagamentoReducer.modal
    }
}

const mapDispatchToProps = {
    fetchCalendarioPagamentoTrigger,
    addCalendarioPagamentoTrigger,
    changeModal
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarioPagamentoContainer);