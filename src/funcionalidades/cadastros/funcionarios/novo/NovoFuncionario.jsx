import React from "react";
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
  InputNumber
} from "@jbuschke/formik-antd";
import "antd/dist/antd.css";
import "./index.css";
import 'moment/locale/pt-br';
import locale from 'antd/lib/date-picker/locale/pt_BR';

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

function NovoFuncionario() {
  return (
    <Formik
      initialValues = {initialState}
      onSubmit = {handleSubmit}
      validationSchema = {funcionarioSchema}
    >
      <div>
        <div className="component-container">
          <FormItem name="nome">
            <Input name="nome" />
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
          <FormItem name="dataContratacao">
            <DatePicker name="dataContratacao" style={{ width: "100%" }} locale={locale} format={'DD/MM/YYYY'} />
          </FormItem>
          <FormItem name="salario">
            <InputNumber name="salario" />
          </FormItem>
          
          <Button.Group size="large">
            <ResetButton>Reset</ResetButton>
            <SubmitButton type="primary">Submit</SubmitButton>
          </Button.Group>
        </div>
        <FormikDebug style={{ maxWidth: 400 }} />
      </div>
    </Formik>
  );
}
export default NovoFuncionario;