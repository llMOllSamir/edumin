import { Box, Paper, Typography, Stack, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import TableTemplate from '../components/TableTemplate'

export default function AllDataDisplay({ title, context }) {
    const { data, removeItem, keys } = useContext(context)
    const [filter, setFilter] = useState(null)
    const [filterData, setFilterData] = useState([])

    const handleChange = (e) => {
        if (e.target.value.length > 0) {
            setFilter(e.target.value)
        } else {
            setFilter(null)
        }
    }

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (filter) {
                setFilterData(data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
            } else {
                setFilterData(data)
            }
        }, 20)
        return () => clearTimeout(timeId)
    }, [data, filter])

    return (
        <Box sx={{
            width: {
                xs: '100%',
                md: '90%',
                lg: '80%',
                xl: '70%'
            }
            , margin: 'auto'
        }}  >
            <Stack mt={5} spacing={2}>
                <Paper elevation={3} width='100%' sx={{ p: 2 }}>
                    <Stack width='100%' direction={'row'} justifyContent={'space-between'} alignItems={'center'}  >
                        <Typography variant='h5' sx={{ fontWeight: 'bold', color: "text.secondary", cursor: 'pointer', userSelect: 'none' }}>
                            {title}
                        </Typography>
                        <TextField sx={{ width: '50%' }} label='Search By Name' onChange={handleChange} />
                    </Stack>
                </Paper>
                <Paper elevation={3}>
                    <TableTemplate dataShow={keys} data={filterData} removeItem={removeItem} />
                </Paper>
            </Stack>
        </Box >
    )
}
