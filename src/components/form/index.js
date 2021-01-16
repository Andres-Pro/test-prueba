import React from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { formatDate } from '../../utils';

const Example = ({ handleChange, formValue }) => {
    return (
        <Form>
            <Row form>
                <Col md={{ size: 8, offset: 2 }} >
                    <FormGroup>
                        <Label for="name" className="float-left">Nombre</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Ingresa tu Nombre"
                            onChange={({ target: { value } }) => handleChange({ ...formValue, name: value })}
                            value={formValue && formValue.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="createDate" className="float-left">Fecha de Alta</Label>
                        <Input
                            disabled
                            readOnly
                            type="date"
                            name="createDate"
                            id="createDate"
                            onChange={({ target: { value } }) => handleChange({ ...formValue, createDate: value })}
                            value={formValue && formatDate(formValue.createDate)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="updateDate" className="float-left">Fecha de Modificacion</Label>
                        <Input
                            disabled
                            readOnly
                            type="date"
                            name="updateDate"
                            id="updateDate"
                            onChange={({ target: { value } }) => handleChange({ ...formValue, updateDate: value })}
                            value={formValue && formatDate(formValue.updateDate)}
                        />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}

export default Example;