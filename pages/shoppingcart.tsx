import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { Button, IconButton, Input, Typography, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { shoppingcartData } from '../src/components/shoppingcart/shoppingcartData';
import { Colors } from '../src/components/theme/theme';
import { useTheme } from "@mui/material/styles";

export default function Shoppingcart() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const clamp: (min: number, max: number) =>
        (v: number) => number = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
    const clampV: (v: number) => number = clamp(1, 10);
    const [value, setValue] = useState<number>(1);
    return (
        <Box className='shoppingcart'>

            <TableContainer component={Paper} className='table' elevation={5}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tableHead' >IMAGE</TableCell>
                            <TableCell className='tableHead'>PRODUCT NAME</TableCell>
                            <TableCell className='tableHead'>PRICE</TableCell>
                            <TableCell className='tableHead'>QUANTITY</TableCell>
                            <TableCell className='tableHead'>TOTAL</TableCell>
                            <TableCell className='tableHead'><CloseIcon /></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shoppingcartData.map((item, index) => (

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={index}>
                                <TableCell component="th" scope="row" className='tableRowImage'>
                                    <Image src={item.img} alt='cartimage' width={150} height={150} />
                                </TableCell>
                                <TableCell className='tableRowName'>{item.name}</TableCell>
                                <TableCell className='tableRowPrice'>${(item.price).toFixed(2)}</TableCell>
                                <TableCell className='tableRowQnt'>
                                    <Box display="flex" justifyContent={'center'}>
                                        <IconButton className='iconButton'
                                            onClick={() => setValue(clampV(value - 1))}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="h6" className='quantity'>
                                            {value}
                                        </Typography>
                                        <IconButton className='iconButton'
                                            onClick={() => setValue(clampV(value + 1))}>
                                            <AddIcon />
                                        </IconButton>
                                    </Box>

                                </TableCell>
                                <TableCell className='tableRowPrice'>$  {(value * item.price).toFixed(2)}</TableCell>
                                <TableCell className='tableRow'><CloseIcon /></TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
            <Box className='shoppingcartBottom' sx={{ flexDirection: matches ? 'column' : 'row' }}>
                <Box className='shoppingcartBottomText' ml={2}
                    sx={{ width: matches ? '90%' : '50%' }}>
                    <Box display={'flex'}>
                        <Typography variant='subtitle1' className='continueShopping'>CONTINUE SHOPPING</Typography>
                        <Typography variant='subtitle1' className='updateCart'>UPDATE CART</Typography>
                    </Box>

                    <Typography variant='subtitle1' mt={3} fontWeight={'bold'} color={Colors.dark} >DISCOUNT CODES</Typography>
                    <Box className='code' sx={{ width: matches ? '90%' : '50%' }}>
                        <input type='text' placeholder='Enter Your Code' className='codeInput' />
                        <Button className='applyBtn' >APPLY</Button>
                    </Box>
                </Box>
                <Box className='shoppingcartBottomTotal' ml={2}
                    sx={{ width: matches ? '90%' : '30%' }} >
                    <Box className='totalText'>
                        <Typography variant='subtitle1'>Subtotal</Typography>
                        <Typography variant='subtitle1'>$ 240.00</Typography>
                    </Box>
                    <Box className='totalText'>
                        <Typography variant='subtitle1' fontWeight={'bold'}>TOTAL</Typography>
                        <Typography variant='subtitle1' color={Colors.info}
                            fontWeight={'bold'}>$ 240.00</Typography>
                    </Box>
                    <Typography variant='subtitle1' className='checkout'>PROCEED TO CHECK OUT</Typography>
                </Box>
            </Box>
        </Box >
    );
}