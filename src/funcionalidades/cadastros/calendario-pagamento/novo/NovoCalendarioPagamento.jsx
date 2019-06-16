import React, { Fragment, Component } from 'react';
import Modal from 'react-modal';
import { Button, Divider } from 'antd';
import { Formik } from "formik";
import * as yup from "yup";
import {
    FormItem,
    SubmitButton,
    Select
} from "@jbuschke/formik-antd";
import styled from 'styled-components';
import 'moment/locale/pt-br';
import moment from 'moment';

const initialState = {
    periodo: null
};

const Titulo = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const Descricao = styled.div`
  text-align: center;
  padding-bottom: 25px;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const ButtonDiv = styled.div`
    text-align: center;
    position: relative;
    display: inline-block;
`;

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    },
    content: {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0)',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
        padding: '20px'
    }
};

const calendarioPagamentoSchema = yup.object().shape({
    periodo: yup
        .string()
        .required('O campo logradouro é obrigatório')
});

let diasMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31];

class NovoCalendarioPagamento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            proximasDatasPagamento: []
        }
    }

    criarListaDataPagamento = (diaUtil, setFieldValue) => {
        setFieldValue('diaUtil', diaUtil);

        let proximasDatasPagamento = [];
        let data = moment({ day: diaUtil });

        if (diaUtil >= moment().date()) {
            proximasDatasPagamento.push(data.format('DD/MM/YYYY'));
        }

        for (let i = 0; i < 11; i++) {
            data.add('M', 1);
            proximasDatasPagamento.push(data.format('DD/MM/YYYY'));
        }

        this.setState({
            proximasDatasPagamento: [...proximasDatasPagamento]
        })
    }

    criarListaDataPagamentoQuinzenal = (periodo, setFieldValue) => {
        setFieldValue('periodo', periodo);

        let proximasDatasPagamento = [];
        let primeiraData = moment({ day: 15 });
        let segundaData = moment().endOf('month');

        if (primeiraData.date() >= moment().date()) {
            proximasDatasPagamento.push(primeiraData.format('DD/MM/YYYY'));
        }

        if (segundaData.date() >= moment().date()) {
            proximasDatasPagamento.push(segundaData.format('DD/MM/YYYY'));
        }

        for (let i = 0; i < 11; i++) {
            primeiraData.add('M', 1);
            segundaData.add('M', 1);

            proximasDatasPagamento.push(primeiraData.format('DD/MM/YYYY'));
            proximasDatasPagamento.push(segundaData.format('DD/MM/YYYY'));
        }

        this.setState({
            proximasDatasPagamento: [...proximasDatasPagamento]
        })
    }

    handleSubmit = values => {

    }

    render() {
        const { calendarioPagamento, isOpen, changeModal } = this.props;
        const { proximasDatasPagamento } = this.state;

        return (
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <Titulo>Cadastro de Calendário Pagamento</Titulo>
                <Descricao>Precisamos saber qual é o calendário de pagamento de sua empresa</Descricao>

                <FormContainer>
                    <Formik
                        initialValues={initialState}
                        validationSchema={calendarioPagamentoSchema}
                    >
                        {({ values, setFieldValue }) => (
                            <Fragment>
                                <FormItem name="teste">
                                    <Select
                                        name="periodo"
                                        style={{ width: "100%" }}
                                        size="large"
                                        onChange={(value) => this.criarListaDataPagamentoQuinzenal(value, setFieldValue)}
                                    >
                                        {Select.renderOptions([
                                            { label: "Selecione o período" },
                                            { label: "Mensalmente", value: 1 },
                                            { label: "Duas vezes ao mês", value: 2 }
                                        ])}
                                    </Select>
                                    {(values.periodo == 1) ?
                                        <Fragment>
                                            <Select
                                                name="diaUtil"
                                                style={{ width: "100%" }}
                                                size="large"
                                                onChange={(value) => this.criarListaDataPagamento(value, setFieldValue)}>
                                                {
                                                    Select.renderOptions(diasMes.map((dia) => (
                                                        {
                                                            label: dia,
                                                            value: dia
                                                        })))
                                                }
                                            </Select>

                                            <Select
                                                name="proximoPagamento"
                                                style={{ width: "100%" }}
                                                size="large"
                                            >
                                                {
                                                    Select.renderOptions(proximasDatasPagamento.map((data) => (
                                                        {
                                                            label: data,
                                                            value: data
                                                        })))
                                                }
                                            </Select>
                                        </Fragment>
                                        :
                                        null
                                    }
                                    {(values.periodo == 2) ?
                                        <Fragment>
                                            <Select
                                                name="proximoPagamento"
                                                style={{ width: "100%" }}
                                                size="large"
                                            >
                                                {
                                                    Select.renderOptions(proximasDatasPagamento.map((data) => (
                                                        {
                                                            label: data,
                                                            value: data
                                                        })))
                                                }
                                            </Select>
                                        </Fragment>
                                        : null
                                    }
                                </FormItem>


                                <Divider />

                                <ButtonDiv>
                                    <Button
                                        size="large"
                                        type="danger"
                                        style={{ width: '45%', marginRight: '10%' }}
                                        onClick={() => changeModal({ isCreateOpen: false })}>
                                        Cancelar
                                        </Button>

                                    <SubmitButton
                                        type="primary"
                                        size="large"
                                        style={{ width: '45%' }}
                                        onClick={() => this.handleSubmit(values)}>
                                        Cadastrar
                                        </SubmitButton>
                                </ButtonDiv>
                            </Fragment>
                        )}

                    </Formik>
                </FormContainer>
            </Modal>
        )
    }
}

export default NovoCalendarioPagamento;
