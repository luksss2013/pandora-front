import React, { Fragment } from "react";
import { Button, Card, Typography } from "antd";
import NovoCalendarioPagamento from "./novo/NovoCalendarioPagamento";

const { Title } = Typography;

const CalendarioPagamento = ({ calendarioPagamento, modal, changeModal }) => (
    <Fragment>
        <NovoCalendarioPagamento calendarioPagamento={calendarioPagamento} isOpen={modal.isCreateOpen} changeModal={changeModal} />

        <Card
            title={<Title level={3} >Calendário Pagamento</Title>}
            bordered={false}
            style={{ width: '95%', margin: '0 auto' }}
            extra={
                <Button type="primary" size="large" onClick={() => changeModal({ isCreateOpen: true })}>
                    Novo Calendario
                </Button>
            }>
            {
                (calendarioPagamento != null) ?
                    calendarioPagamento.periodo + " " + calendarioPagamento.diaUtil + " " + calendarioPagamento.primeiraDataPagamento :
                    null
            }
        </Card>
    </Fragment>
)

export default CalendarioPagamento;