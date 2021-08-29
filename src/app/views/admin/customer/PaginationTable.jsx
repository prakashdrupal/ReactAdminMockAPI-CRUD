import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    Icon
} from '@material-ui/core'

import axios from 'axios'

const PaginationTable = () => {

    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    // const [users,setusers]= useState([])
    //     useEffect(() => {
    //         fetchusers();
    //     }, [])
    //     useEffect(() => {
    //         console.log(users)
    //     }, [users])
    //     const fetchusers=async()=>{
    //         const response= await Axios('https://jsonplaceholder.typicode.com/users');
    //         setusers(response.data)    
    //     }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6129cc8a068adf001789b921.mockapi.io/api/v1/employee`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, first_name, last_name, email, phone, gender, organization, designation, salary, birthday, status } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', first_name);
        localStorage.setItem('Last Name', last_name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Salary', salary);
        localStorage.setItem('Birthday', birthday);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('Organization', organization);
        localStorage.setItem('Designation', designation);
        localStorage.setItem('Checkbox Value', status)
    }

    const getData = () => {
        axios.get(`https://6129cc8a068adf001789b921.mockapi.io/api/v1/employee`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6129cc8a068adf001789b921.mockapi.io/api/v1/employee/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        
        <div className="w-full overflow-auto">
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        {/* <TableCell className="px-0">Id</TableCell> */}
                        <TableCell className="px-0">First Name</TableCell>
                        <TableCell className="px-0">Last Name</TableCell>
                        <TableCell className="px-0">Email</TableCell>
                        <TableCell className="px-0">Phone</TableCell>
                        <TableCell className="px-0">Gender</TableCell>
                        <TableCell className="px-0">BirthDay</TableCell>
                        <TableCell className="px-0">Salary</TableCell>
                        <TableCell className="px-0">Designation</TableCell>
                        <TableCell className="px-0">Organization</TableCell>
                        <TableCell className="px-0">Status</TableCell>
                        <TableCell className="px-0">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {APIData
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((user, index) => (
                            <TableRow key={index}>
                                {/* <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.id}
                                </TableCell> */}
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.first_name}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.last_name}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.email}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.phone}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.gender}
                                </TableCell>

                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.birthday}
                                </TableCell>

                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.salary}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.designation}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.organization}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.status ? 'True' : 'False'}
                                </TableCell>
                                <TableCell className="px-0">
                                    <IconButton>
                                    <Link size="sm" color="primary" to={"/admin/customer/edit/" + user.id} onClick={() => setData(user)}><span class="material-icons MuiIcon-root" aria-hidden="true">edit</span></Link>
                                    <IconButton onClick={() => onDelete(user.id)}><Icon color="error">close</Icon></IconButton>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>

            <TablePagination
                className="px-4"
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={APIData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default PaginationTable
