import React, { Fragment } from 'react';
import { List, Skeleton, Typography, Card, Button } from 'antd';
import NovaLocalizacao from './nova/NovaLocalizacao';
import EditaLocalizacao from './editar/EditaLocalizacao';

const Item = List.Item;
const Meta = Item.Meta;
const { Title } = Typography;


const Localizacao = ({ localizacoes, isLoading, openCreateModal, openEditModal }) => (
    <Fragment>
        <NovaLocalizacao />
        <EditaLocalizacao />

        <Card
            title={<Title level={3} >Localizações</Title>}
            bordered={false}
            style={{ width: '95%', margin: '0 auto' }}
            extra={
                <Button type="primary" size="large" onClick={() => openCreateModal()}>
                    Nova Localização
                </Button>
            }>
            <List
                itemLayout="horizontal"
                dataSource={localizacoes}
                renderItem={item => (
                    <Item actions={[<Button onClick={() => openEditModal(item.id)}>Editar</Button>]}>
                        <Skeleton title={false} loading={isLoading} active>
                            <Meta
                                title={item.cidade}
                                description={item.logradouro + ", " + item.cidade + ", " + item.estado}
                            />
                        </Skeleton>
                    </Item>
                )}
            />
        </Card>
    </Fragment>

)

export default Localizacao;