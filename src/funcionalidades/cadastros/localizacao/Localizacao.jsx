import React, { Fragment } from 'react';
import { List, Skeleton, Typography, Card, Button } from 'antd';
import NovaLocalizacao from './nova/NovaLocalizacao';

const Item = List.Item;
const Meta = Item.Meta;
const { Title } = Typography;

const Localizacao = ({ localizacoes, isLoading, openModal }) => (
    <Fragment>
        <NovaLocalizacao />

        <Card
            title={<Title level={3} >Localizações</Title>}
            bordered={false}
            style={{ width: '95%', margin: '0 auto' }}
            extra={
                <Button type="primary" size="large" onClick={() => openModal()}>
                    Nova Localização
                </Button>
            }>
            <List
                itemLayout="horizontal"
                dataSource={localizacoes}
                renderItem={item => (
                    <Item actions={[<a>Editar</a>]}>
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