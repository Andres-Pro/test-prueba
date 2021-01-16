import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { map } from 'lodash'
import { formatShowDate } from '../../utils';


const Example = ({ personList, handleRemove, handleUpdate, handleClearList }) => {
    return (
        <>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Fecha de Alta</th>
                        <th>Fecha de Modificacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {map(personList, (item, index) => (
                        <tr key={index}>
                            <th className="table-td" scope="row">{(index + 1)}</th>
                            <td className="table-td">{item.name}</td>
                            <td className="table-td">{formatShowDate(item.createDate)}</td>
                            <td className="table-td">{formatShowDate(item.updateDate)}</td>
                            <td className="my-auto">
                                <Button
                                    className="m-2"
                                    color="info"
                                    size="sm"
                                    onClick={() => handleUpdate(item, index)}
                                >
                                    Modificar
                            </Button>
                                <Button
                                    className="m-2 "
                                    color="danger"
                                    size="sm"
                                    onClick={() => handleRemove(index)}
                                >
                                    Borrar
                            </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row>
                <Col>
                    <Button
                        className="m-2 "
                        color="danger"
                        size="sm"
                        onClick={handleClearList}
                    >
                        Borrar Todo
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Example;