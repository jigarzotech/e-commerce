import { Box, Button, Checkbox, FormControl, FormControlLabel, Input, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { Colors } from '../src/components/theme/theme'
import { useTheme } from "@mui/material/styles";

function Checkout() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const { register, formState: { errors }, handleSubmit, watch } = useForm({
    });

    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    return (
        <Box className='checkout'>
            {/* <Box className='checkoutLoginBtn'>

            </Box> */}
            <Box className='checkoutDetails' sx={{ flexDirection: matches ? 'column' : 'row' }}>

                <form className='biilDetails' style={{ width: matches ? '90%' : '50%' }} onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant='subtitle1' className='Btns'>
                        Click Here To Login
                    </Typography>
                    <Typography variant='h4' mt={2} fontWeight={'bold'}>Biiling Details</Typography>
                    <Box display={'flex'} sx={{ width: '100%', marginTop: '20px' }} >
                        <FormControl sx={{ width: '48%' }}>
                            <Typography color={Colors.dark} mt={1}>First Name*</Typography>
                            <input className='Forminput'
                                {...register("fname")}
                            />
                        </FormControl>
                        <FormControl sx={{ width: '48%' }}>
                            <Typography color={Colors.dark} mt={1} ml={3}>Last Name*</Typography>
                            <input className='Forminput' style={{ marginLeft: '20px' }}
                                {...register("lname")}
                            />
                        </FormControl>
                    </Box>
                    <FormControl>
                        <Typography color={Colors.dark} mt={1}>Company Name</Typography>
                        <input className='Forminput'
                            {...register("companyName")}
                        />
                    </FormControl>
                    <FormControl>
                        <Typography color={Colors.dark} mt={1}>Country*</Typography>
                        <input className='Forminput'
                            {...register("country")}
                        />
                    </FormControl>
                    <FormControl>
                        <Typography color={Colors.dark} mt={1}>Street Address*</Typography>
                        <input className='Forminput'
                            {...register("streetAddress")}
                        />
                    </FormControl>
                    <FormControl>
                        <Typography color={Colors.dark} mt={1}>Postcode / ZIP (optional)</Typography>
                        <input className='Forminput'
                            {...register("postcode")}
                        />
                    </FormControl>
                    <FormControl>
                        <Typography color={Colors.dark} mt={1}>Town / City*</Typography>
                        <input className='Forminput'
                            {...register("city")}
                        />
                    </FormControl>
                    <Box display={'flex'} sx={{ width: '100%' }} >
                        <FormControl sx={{ width: '48%' }}>
                            <Typography color={Colors.dark} mt={1}>Email Address*</Typography>
                            <input className='Forminput'
                                {...register("email")}
                            />
                        </FormControl>
                        <FormControl sx={{ width: '48%' }}>
                            <Typography color={Colors.dark} mt={1} ml={3}>Phone*</Typography>
                            <input className='Forminput' style={{ marginLeft: '20px' }}
                                {...register("phone")}
                            />
                        </FormControl>
                    </Box>
                    <FormControlLabel control={<Checkbox />} label="Create an account?" />
                    {/* <button type='submit'>submit</button> */}
                </form>
                <Box className='orderDetails' sx={{ width: matches ? '90%' : '50%' }}>

                    <input type='text' className='Btns input' placeholder='  Enter Your Coupon Code' style={{ color: Colors.dim_grey }} />

                    <Typography variant='h4' mt={2} ml={3} fontWeight={'bold'}>Your Order</Typography>
                    <Box className='orderDetailsBox'>
                        <Box className='orderItems'>
                            <Typography variant='subtitle1' fontWeight={'bold'}>PRODUCT</Typography>
                            <Typography variant='subtitle1' fontWeight={'bold'}>TOTAL</Typography>
                        </Box>
                        <Box className='orderItems'>
                            <Typography variant='subtitle1'>Combination X 1</Typography>
                            <Typography variant='subtitle1'>$ 40.00</Typography>
                        </Box>
                        <Box className='orderItems'>
                            <Typography variant='subtitle1'>Combination X 1</Typography>
                            <Typography variant='subtitle1'>$ 30.00</Typography>
                        </Box>
                        <Box className='orderItems'>
                            <Typography variant='subtitle1'>Combination X 1</Typography>
                            <Typography variant='subtitle1'>$ 20.00</Typography>
                        </Box>
                        <Box className='orderItems'>
                            <Typography variant='subtitle1' fontWeight={'bold'}>Total</Typography>
                            <Typography variant='subtitle1' fontWeight={'bold'} color={Colors.info}>$ 90.00</Typography>
                        </Box>
                        <FormControlLabel control={<Checkbox />} className='paymentCheckbox' label="Cheque Payment" />
                        <FormControlLabel control={<Checkbox />}
                            className='paymentCheckbox' label="Paypal" />
                        <Button className='paymentBtn'>PLACE ORDER</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Checkout