import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Button, Divider } from 'antd';
import { Formik } from "formik";
import * as yup from "yup";
import {
    Input,
    FormItem,
    SubmitButton
} from "@jbuschke/formik-antd";
import styled from 'styled-components';
import { updateLocalizacaoTrigger, changeModal } from '../LocalizacaoActions';
import { bindActionCreators } from 'redux';

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

const localizacaoSchema = yup.object().shape({
    logradouro: yup
        .string()
        .required('O campo logradouro é obrigatório'),
    cidade: yup
        .string()
        .required('O campo cidade é obrigatório'),
    estado: yup
        .string()
        .required('O campo estado é obrigatório'),
    cep: yup
        .string()
        .required('O campo CEP é obrigatório'),
    telefone: yup
        .string()
        .required('O campo telefone é obrigatório')
});


class EditaLocalizacao extends PureComponent {
    submitForm = (values) => {
        this.props.updateLocalizacaoTrigger(values);
    }

    render() {
        const { changeModal, isOpen, localizacao } = this.props;

        return (
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <Titulo>Edição de localizações</Titulo>
                <Descricao>Para automatizarmos o pagamento, precisamos saber os endereços de sua empresa.</Descricao>

                <FormContainer>
                    <Formik
                        initialValues={localizacao}
                        validationSchema={localizacaoSchema}
                    >
                        {({ values, setFieldValue }) => (
                            <div>
                                <div className="component-container">
                                    <FormItem name="logradouro">
                                        <Input addonBefore="Logradouro" size="large" name="logradouro" />
                                    </FormItem>
                                    <FormItem name="cidade">
                                        <Input addonBefore="Cidade" size="large" name="cidade" />
                                    </FormItem>
                                    <FormItem name="estado">
                                        <Input addonBefore="Estado" size="large" name="estado" />
                                    </FormItem>
                                    <FormItem name="cep">
                                        <Input addonBefore="CEP" size="large" name="cep" value={values.cep} onChange={(e) => setFieldValue('cep', e.target.value)} />
                                    </FormItem>
                                    <FormItem name="telefone">
                                        <Input addonBefore="Telefone" size="large" name="telefone" value={values.telefone} onChange={(e) => setFieldValue('telefone', e.target.value)} />
                                    </FormItem>

                                    <Divider />
                                    <ButtonDiv>
                                        <Button
                                            onClick={() => changeModal(false)}
                                            size="large"
                                            type="danger"
                                            style={{ width: '45%', marginRight: '10%' }}>
                                            Cancelar
                                            </Button>

                                        <SubmitButton
                                            onClick={() => this.submitForm(values)}
                                            type="primary"
                                            size="large"
                                            style={{ width: '45%' }}>
                                            Atualizar
                                            </SubmitButton>
                                    </ButtonDiv>

                                </div>
                            </div>
                        )}

                    </Formik>
                </FormContainer>

            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localizacao: state.localizacaoReducer.localizacao,
        isOpen: state.localizacaoReducer.modal.isEditOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeModal: bindActionCreators(changeModal, dispatch),
        updateLocalizacaoTrigger: bindActionCreators(updateLocalizacaoTrigger, dispatch),
    }

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditaLocalizacao);
