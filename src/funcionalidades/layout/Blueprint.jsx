import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import './style.css';
import FuncionariosContainer from '../cadastros/funcionarios/FuncionariosContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NovoFuncionario from '../cadastros/funcionarios/novo/NovoFuncionario';
import LocalizacaoContainer from '../cadastros/localizacao/LocalizacaoContainer';
import CalendarioPagamentoContainer from '../cadastros/calendario-pagamento/CalendarioPagamentoContainer';

const {
  Header, Footer, Sider, Content,
} = Layout;

class Blueprint extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Sider style={{
              overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
            >
              <div className="logo" />

              <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                  <Link to='/pagamento/calendario'>
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                  </Link>

                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/funcionario'>
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="bar-chart" />
                  <span className="nav-text">nav 4</span>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="cloud-o" />
                  <span className="nav-text">nav 5</span>
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="appstore-o" />
                  <span className="nav-text">nav 6</span>
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon type="team" />
                  <span className="nav-text">nav 7</span>
                </Menu.Item>
                <Menu.Item key="8">
                  <Icon type="shop" />
                  <span className="nav-text">nav 8</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div style={{ padding: 24, background: '#fff' }}>

                  <Route exact path="/funcionario" component={FuncionariosContainer} />
                  <Route exact path="/" component={LocalizacaoContainer} />
                  <Route exact path="/funcionario/novo" component={NovoFuncionario} />
                  <Route exact path="/pagamento/calendario" component={CalendarioPagamentoContainer} />

                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
      </Footer>
            </Layout>

          </Layout>
        </Router>
      </div>
    )
  }
}

export default Blueprint;