import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {
    const navigate = useNavigate()
    return (
        <Stack sx={{
            flexGrow: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant='h2' color='error' gutterBottom>
                Page Not Found 404
            </Typography>

            <Button variant='outlined' color='error' sx={{ fontWeight: 'bold' }} size='large' onClick={() => navigate("/")}>Back to Home</Button>

        </Stack>
    )
}
