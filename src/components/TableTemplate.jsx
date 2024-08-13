import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper, Avatar, IconButton,
    TableSortLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation, useNavigate } from 'react-router-dom';

export default function TableTemplate({ data: rows, removeItem, dataShow }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentData, setCurrentData] = useState([]);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
        if (isAsc) {
            setCurrentData(prev => [...prev.sort((a, b) => {
                return a[property] > b[property] ? 1 : -1
            })])
        } else {
            setCurrentData(prev => [...prev.sort((a, b) => {
                return a[property] < b[property] ? 1 : -1
            })])
        }
    };
    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate the data to display for the current page

    useEffect(() => {
        setCurrentData(rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
    }, [page, rowsPerPage, rows])

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell></TableCell>
                            {
                                dataShow?.map((key, index) => (
                                    <TableCell sx={{ textAlign: 'center', fontWeight: 'bold', textTransform: 'capitalize' }} key={index}>
                                        {key === "name" && <TableSortLabel
                                            active={orderBy === key}
                                            direction={orderBy === key ? order : 'asc'}
                                            onClick={(event) => handleRequestSort(event, key)} />}
                                        {key}
                                    </TableCell>
                                ))
                            }
                            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{
                        "& tr:hover": {
                            backgroundColor: 'rgba(0, 0, 0, 0.12)',
                            cursor: 'pointer'
                        }
                    }}>
                        {currentData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Avatar alt={row.name} src={row.img} />
                                </TableCell>
                                {
                                    dataShow?.map((key, index) => (
                                        <TableCell sx={{ textAlign: 'center' }} key={index}>{row[key]}</TableCell>
                                    ))
                                }
                                <TableCell>
                                    <IconButton onClick={() => navigate(`/${pathname.split("/")[1]}/edit${pathname.split("/")[1]}/${row.id}`)} color="primary" aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => removeItem({ id: row.id })} color="error" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component={"div"}
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelDisplayedRows={({ from, to, count }) => `${from} – ${to} of ${count}`}
                sx={{
                    "& .MuiTablePagination-displayedRows": {
                        margin: 0,
                        fontWeight: "bold"
                    },
                    "& .MuiInputBase-root": {
                        margin: "0 10px 0 0",
                        fontWeight: "bold"
                    },
                    "& .MuiTablePagination-selectLabel": {
                        margin: 0,
                        fontWeight: "bold",
                    }
                }}
            /></>
    )
}
