import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Form from '../components/form';
import List from '../components/list';
import { formatDate } from '../utils';
import './App.css';

function App() {
    const [currentDate, setDate] = useState({})
    const [showList, setShowList] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [indexUpdate, setIndexUpdate] = useState(false)
    const [personList, setPersonList] = useState([])
    const searchInfo = async () => {
        const api = await fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires');
        const response = await api.json();
        setDate(response.datetime)
    }

    const [formValue, setFormValue] = useState({
        name: '',
        createDate: currentDate,
        updateDate: currentDate
    })

    useEffect(() => {
        searchInfo()
    }, []);

    const handleShowTable = () => {
        setShowList(showList => !showList)
    };

    const cleanFormValue = () => {
        setFormValue({
            name: '',
            createDate: formatDate(currentDate),
            updateDate: formatDate(currentDate)
        })
    };

    const handleAddRecord = () => {
        if (!isUpdate) personList.push(formValue);
        else {
            personList[indexUpdate] = formValue;
            setIndexUpdate(false);
            setIsUpdate(false);
        }
        return cleanFormValue();
    };

    const handleClearList = () => {
        setPersonList([]);
    };

    const handleChange = obj => {
        setFormValue(obj);
    };

    const handleRemove = index => {
        personList.splice(index, 1)
        cleanFormValue()
    };

    const handleUpdate = (item, index) => {
        setIsUpdate(true);
        setIndexUpdate(index)
        setFormValue(item);
    };

    return (
        <Container className="App">
            <Row className="m-4">
                <Col className="d-flex justify-content-center">
                    <h2>Ejercicios Para Desarrollador Front-End.</h2>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form formValue={formValue} handleChange={handleChange} />
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button
                                onClick={handleAddRecord}
                                className="m-2"
                                color="info"
                            >
                                Insertar Registro
                            </Button>
                            <Button
                                onClick={handleShowTable}
                                className="m-2"
                                color="success"
                            >
                                {!showList ? 'Mostrar Tabla' : 'Ocultar Tabla'}
                            </Button>
                            <Button
                                onClick={cleanFormValue}
                                className="m-2"
                                color="danger"
                            >
                                Limpiar
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {showList &&
                <Row className="mt-4">
                    <Col>
                        <hr />
                        <List personList={personList} handleRemove={handleRemove} handleUpdate={handleUpdate} handleClearList={handleClearList} />
                    </Col>
                </Row>}
        </Container>
    );
}

export default App;
