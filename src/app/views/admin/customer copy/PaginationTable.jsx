import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@material-ui/core'

import Axios from 'axios'

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

    const [users,setusers]= useState([])
        useEffect(() => {
            fetchusers();
        }, [])
        useEffect(() => {
            console.log(users)
        }, [users])
        const fetchusers=async()=>{
            const response= await Axios('https://jsonplaceholder.typicode.com/users');
            setusers(response.data)    
        }

    return (
        
        <div className="w-full overflow-auto">
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0">Id</TableCell>
                        <TableCell className="px-0">Name</TableCell>
                        <TableCell className="px-0">Email</TableCell>
                        <TableCell className="px-0">Phone</TableCell>
                        <TableCell className="px-0">Address</TableCell>
                        <TableCell className="px-0">Website</TableCell>
                        <TableCell className="px-0">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users && users
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((user, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.id}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.name}
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
                                    {user.address.zipcode}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                >
                                    {user.website}
                                </TableCell>
                                {/* <TableCell className="px-0">
                                    <IconButton>
                                        <Icon color="error">close</Icon>
                                    </IconButton>
                                </TableCell> */}
                                <TableCell className="px-0">
                                    <IconButton>
                                    {/* <span class="material-icons MuiIcon-root" aria-hidden="true" tag={Link} to={"/customer/" + user.id}>edit</span> */}
                                    <Link size="sm" color="primary" to={"/admin/customer/edit/" + user.id}><span class="material-icons MuiIcon-root" aria-hidden="true">edit</span></Link>
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
                count={users.length}
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
