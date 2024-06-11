/* eslint-disable no-unused-vars */
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GetData } from "../../Services/help";
import { useNavigate } from "react-router";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";



const DashBord = () => {

    const [viewData, setViewData] = useState(GetData("employeeData"));

    console.log(viewData);
    const navigate = useNavigate();



    const handleEdit = (id) => {

        console.log("id", id);

        navigate(`/edit/${id}`);


    }

    const handleDelete = (id) => {

        console.log("id", id);
        const newData = viewData.filter((data) => {
            return data.id !== id;
        });

        console.log('data', newData);

        localStorage.setItem("employeeData", JSON.stringify(newData));
        setViewData(newData);

    }

    const handleSort = (type) => {
        console.log("type", type);

        let newData;

        switch (type) {
            case "asc":
                newData = [...viewData].sort((dataF, dataS) => {

                    return dataF.empname.localeCompare(dataS.empname)

                })

                break;

            case "dsc":
                newData = [...viewData].sort((dataF, dataS) => {

                    return dataS.empname.localeCompare(dataF.empname)

                })
                break;

            default:
                break;

        }

        setViewData(newData);

    }

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {


        setSearch(e.target.value);



    }

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("e", e);

        let rec = GetData("employeeData");
        const serachData = rec.filter((data) => {
            return (
                data.empname.toLowerCase().includes(search.toLowerCase()) ||
                data.empage.toLowerCase().includes(search.toLowerCase()) ||
                data.empdepartment.toLowerCase().includes(search.toLowerCase()) ||
                data.empposition.toLowerCase().includes(search.toLowerCase()) ||
                data.empemail.toLowerCase().includes(search.toLowerCase()) ||
                data.empsalary.toLowerCase().includes(search.toLowerCase())
            )

        })

        setViewData(serachData);

    }


    return (
        <>



            <div className="p-3">

                <div className="mb-3  d-flex  justify-content-end">

                    <div className="w-50">
                        <Form className=" w-75 d-flex" onSubmit={handleSubmit}>
                            <Form.Control type="text" placeholder="Search..." onChange={handleSearch} value={search} /> &nbsp;
                            <button className="bg-color t-w rounded-3 border-0 px-3 py-2">Search</button>
                        </Form>

                    </div>

                </div>


                <table className='w-100 text-center' >
                    <thead className=' border border-bottom boreder-3 border-dark'  >
                        <tr>

                            <th className='border-1 border-white py-2 bg-color t-w'>Emp Id</th>
                            <th className='border-1 border-white bg-color t-w'>

                                Emp Name &nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('asc')}><i className="bi bi-sort-alpha-up"></i></button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('dsc')}><i className="bi bi-sort-alpha-down-alt"></i></button>

                            </th>
                            <th className='border-1 border-white bg-color t-w'>Emp Age</th>
                            <th className='border-1 border-white bg-color t-w d-flex align-items-center border-0'>
                                <div>

                                    Emp Department &nbsp;&nbsp;&nbsp;
                                    <button className="border-0 ronnded-" onClick={() => handleSort('asc')}><i className="bi bi-sort-alpha-up"></i></button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="border-0 ronnded-" onClick={() => handleSort('dsc')}><i className="bi bi-sort-alpha-down-alt"></i></button>
                                </div>
                                <div className="px-2 ">
                                    <DropdownButton>
                                        <option> Full Stack </option>
                                        <option> Web Design</option>
                                        <option> Web Development </option>
                                    </DropdownButton>
                                </div>
                            </th>
                            <th className='border-1 border-white bg-color t-w'>
                                Emp Position &nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('asc')}><i className="bi bi-sort-alpha-up"></i></button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('dsc')}><i className="bi bi-sort-alpha-down-alt"></i></button>
                            </th>
                            <th className='border-1 border-white bg-color t-w'>Emp Salary</th>
                            <th className='border-1 border-white bg-color t-w'>
                                Emp Email &nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('asc')}><i className="bi bi-sort-alpha-up"></i></button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="border-0 ronnded-" onClick={() => handleSort('dsc')}><i className="bi bi-sort-alpha-down-alt"></i></button>
                            </th>
                            <th className='border-1 border-white bg-color t-w'>Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            viewData.map((data) => {
                                return (
                                    <>
                                        <tr>
                                            <td className='border-1 border-dark'>{data.id}</td>
                                            <td className='border-1 border-dark'>{data.empname}</td>
                                            <td className='border-1 border-dark'>{data.empage}</td>
                                            <td className='border-1 border-dark'>{data.empdepartment}</td>
                                            <td className='border-1 border-dark'>{data.empposition}</td>
                                            <td className='border-1 border-dark'>{data.empsalary}</td>
                                            <td className='border-1 border-dark'>{data.empemail}</td>
                                            <td className='border-1 border-dark'>
                                                <div>
                                                    <button type='submit' className='border-0 bg-body ' ><i className="bi bi-eye-fill text-primary fs-4"></i></button>
                                                    <button type='submit' className='border-0 bg-body mr-10' onClick={() => handleEdit(data.id)}><i className="bi bi-pencil-square text-warning fs-4"></i></button>
                                                    <button type='submit' className='border-0 bg-body' onClick={() => handleDelete(data.id)}><i className="bi bi-trash-fill text-danger fs-4"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default DashBord;