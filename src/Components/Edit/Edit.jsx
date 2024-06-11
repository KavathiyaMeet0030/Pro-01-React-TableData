/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
// import generateUniqueId from 'generate-unique-id';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router';
import { GetData } from '../../Services/help';


const Edit = () => {

    const { id } = useParams();

    const [empData, setempData] = useState({
        id: '',
        empname: '',
        empage: '',
        empdepartment: '',
        empposition: '',
        empsalary: '',
        empemail: ''

    })

    const [store, setStore] = useState(GetData("employeeData"));

    // eslint-disable-next-line no-unused-vars
    const [meet, setMeet] = useState(false)

    let navigate = useNavigate();


    useEffect(() => {
        const data = store.find((data) => {
            return data.id === id
        });
        console.log("edit Data", data);

        setempData(data);

    }, [])



    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setempData({ ...empData, [name]: value });

    }

    const handleSubmit = (e) => {

        e.preventDefault();


       


        let updateRecord = store.map((data) => {

            if (data.id == id) {
                return data = empData
            }

            return data
        })

        console.log("log", updateRecord)


        setStore(updateRecord);
        setMeet(true);

       

    }


    useEffect(() => {

        localStorage.setItem("employeeData", JSON.stringify(store));

    }, [store])

    useEffect(() => {

        if (meet) {
            navigate(`/`);
        }


    }, [meet])


    return (
        <>



            <div className=' w-75 container bg-color rounded-4 mt-5'>
                <h1 className="pt-5 text-center t-w"> Edit Details</h1>
                <div className='pt-4'>
                    <Form className='p-4' onSubmit={handleSubmit}>
                        <Form.Control type="text" name='id' value={empData.id} hidden onChange={handleChange} />
                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalEmail">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Employee Name .." name='empname' value={empData.empname} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Age
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Enter Employee Age" name='empage' value={empData.empage} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Department
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Employee Department .." name='empdepartment' value={empData.empdepartment} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Position
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Enter Employee Position .." name='empposition' value={empData.empposition} onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Salary
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Enter Employee Salary .." name='empsalary' value={empData.empsalary} onChange={handleChange} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3 d-flex align-items-center" controlId="formHorizontalPassword">
                            <Form.Label column sm={2} className='t-w fs-4'>
                                Employee Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" placeholder="Enter Employee Email .." name='empemail' value={empData.empemail} onChange={handleChange} />
                            </Col>
                        </Form.Group>



                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='px-5 py-2 rounded-pill'>Submit</button>
                        </div>


                    </Form>


                </div>


            </div>

        </>
    );
};

export default Edit;