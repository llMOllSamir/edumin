import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
    return (
        <Stack sx={{
            flexGrow: 1,
            alignSelf: 'stretch',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundColor: 'primary.main',
        }}>
            <Box sx={{
                backgroundImage: `url(${require('../assists/img8.jpg')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant='h1' mt={10} color='white' sx={{ backdropFilter: "blur(4px)", fontWeight: 'bold', padding: '10px 20px', filter: 'drop-shadow(2px 4px 6px black)' }} >
                    Welcome To Edumin
                </Typography>
            </Box>
        </Stack >
    )
}
