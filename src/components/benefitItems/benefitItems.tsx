import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from "@mui/material/styles";

function BenefitItems() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box className='benefitItems' sx={{
            flexDirection: matches ? 'column' : 'row', padding: matches ? '0px' : '0px 70px'
        }}>
            <Box className='Items'>
                <LocalShippingIcon className='ItemsIcon' fontSize='large' />
                <Box className='ItemsText'>
                    <Typography variant='subtitle1' className='subtitle1'>FREE SHIPPING</Typography>
                    <Typography variant='subtitle2'>
                        For all order over 99$</Typography>
                </Box>
            </Box>
            <Box className='Items'>
                <AccessTimeIcon className='ItemsIcon' fontSize='large' />
                <Box className='ItemsText'>
                    <Typography variant='subtitle1' className='subtitle1'>DELIVERY ON TIME</Typography>
                    <Typography variant='subtitle2'>
                        If good have prolems</Typography>
                </Box>
            </Box>
            <Box className='Items'>
                <LocalShippingIcon className='ItemsIcon' fontSize='large' />
                <Box className='ItemsText'>
                    <Typography variant='subtitle1' className='subtitle1'>SECURE PAYMENT</Typography>
                    <Typography variant='subtitle2'>
                        100% secure payment</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default BenefitItems