import React, { Fragment, Component } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "antd";
import {
  Input,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  DatePicker,
  InputNumber,
  Select
} from "@jbuschke/formik-antd";
import "antd/dist/antd.css";
import "./index.css";
import 'moment/locale/pt-br';
import locale from 'antd/lib/date-picker/locale/pt_BR';
import { fetchLocalizacoes } from '../../localizacao/LocalizacaoActions';
import { connect } from 'react-redux';

const initialState = {
  nome: '',
  email: '',
  dataNascimento: null,
  cargo: '',
  dataContratacao: '',
  salario: ''
};

const funcionarioSchema = yup.object().shape({
  nome: yup
    .string('O campo nome deve ser texto')
    .required('O campo nome é obrigatório'),
  email: yup
    .string('O campo email deve ser texto')
    .email('O campo email está incorreto')
    .required('O campo email é obrigatório'),
  dataNascimento: yup
    .string()
    .required('Requerido'),
  cargo: yup
    .string('O campo cargo deve ser texto')
    .required('O campo cargo é obrigatório'),
  dataContratacao: yup
    .string()
    .required('Requerido'),
  salario: yup
    .number('O campo salário deve ser numérico')
    .required('O campo salário é obrigatório')
    .positive('O campo salário deve ser positivo')
});

const handleSubmit = (values) => {
  console.log(values)
}

class NovoFuncionario extends Component {

  componentDidMount() {
    this.props.fetchLocalizacoes();
  }

  render() {
    return (
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={funcionarioSchema}
      >
        <Fragment className="component-container">
          <FormItem name="nome">
            <Input name="nome" />
          </FormItem>
          <FormItem name="dataContratacao">
            <DatePicker name="dataContratacao" style={{ width: "100%" }} locale={locale} format={'DD/MM/YYYY'} />
          </FormItem>
          <FormItem name="localizacao">
            <Select name="idLocalizacao" style={{ width: "100%" }}>
              {Select.renderOptions(this.props.localizacoes.map((localizacao) => ({ label: localizacao.logradouro + ', ' + localizacao.cidade + ', ' + localizacao.estado, value: localizacao.id })))}
            </Select>
          </FormItem>
          <FormItem name="email">
            <Input name="email" />
          </FormItem>
          <FormItem name="dataNascimento">
            <DatePicker name="dataNascimento" style={{ width: "100%" }} locale={locale} format={'DD/MM/YYYY'} />
          </FormItem>
          <FormItem name="cargo">
            <Input name="cargo" />
          </FormItem>
          <FormItem name="salario">
            <InputNumber name="salario" />
          </FormItem>

          <Button.Group size="large">
            <ResetButton>Reset</ResetButton>
            <SubmitButton type="primary">Submit</SubmitButton>
          </Button.Group>
          <FormikDebug style={{ maxWidth: 400 }} />
        </Fragment>
      </Formik>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    localizacoes: state.localizacaoReducer.localizacoes,
    isLoading: state.funcionarioReducer.isLoading,
    error: state.funcionarioReducer.error
  };
}
const mapDispatchToProps = {
  fetchLocalizacoes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NovoFuncionario);
