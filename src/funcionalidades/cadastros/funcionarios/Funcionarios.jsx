import React from 'react';
import { Table, Button } from 'antd';
import { Link } from "react-router-dom";

class Funcionarios extends React.Component {

    render() {
        const { columns, data } = this.props;

        return (
            <div>
                <div style={{ textAlign: "right" }}>
                    <Link to='/funcionario/novo'>
                        <Button type="primary" icon="user-add" style={{ marginBottom: "15px" }}>Adicionar Funcionário</Button>
                    </Link>
                </div>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
        )
    }
}

export default Funcionarios;