import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <Stack sx={{ backgroundColor: 'primary.main', }} direction='row' justifyContent='center' alignItems={'center'} py={4}>
            <Typography variant='subtitle2' color='white'> Copyright © Designed &amp; Developed by
                <Button sx={{ fontWeight: 'bold', color: 'black' }} LinkComponent={Link} to={'/'}>Design Lab</Button> 2020
            </Typography>
        </Stack>
    )
}
