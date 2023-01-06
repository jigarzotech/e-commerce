import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Colors } from '../theme/theme';
import { itemCategory, itemData } from './menBannerData';
import MenBannerSlider from './menBannerSlider';
import { useTheme } from "@mui/material/styles";

interface props {
    filterData: {
        img: string;
        category: string;
        title: string;
        price: string
    }
}
function MenBanner() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [activeCategory, setActiveCategory] = useState<string>('')
    const [filterData, setFilterData] = useState<Array>([])
    const filterDataHandler = (name: string) => {
        if (activeCategory) {
            const newData = itemData.filter((item) => item?.category === name)
            setActiveCategory(name)
            setFilterData(newData)
        }
        else {
            const newData = itemData.filter((item) => item?.category === 'clothings')
            setActiveCategory('clothings')
            setFilterData(newData)
        }
    }
    useEffect(() => {
        filterDataHandler()
    }, [])
    return (
        <Box className='menBanner'
            sx={{ flexDirection: matches && 'column' }}>

            <Box className='menBannerSlider'
                sx={{ width: matches ? '100%' : '75%' }}>
                <Box className='menBannerSliderList' sx={{ width: matches ? '100%' : '50%' }}>
                    {itemCategory?.map((item, index) => (
                        <Typography className='ListItem' key={index}
                            onClick={() => filterDataHandler(item.name)}
                            sx={{ color: item?.name === activeCategory ? Colors.info : Colors.black, borderBottom: item?.name === activeCategory && '1px solid', fontSize: matches ? '15px' : '20px' }}>
                            {item.name}</Typography>

                    ))}

                </Box>
                <Box className='sliderComponent' sx={{
                    width: matches ? '100%' : '90%'
                }}>
                    <MenBannerSlider filterData={filterData} />
                </Box >
            </Box >
            <Box className='ImageContainer'
                sx={{ width: matches ? '90%' : '25%', marginLeft: !matches && '20px', margin: matches && 'auto' }} >
                <Typography variant='h2'>Men's</Typography>
                <Typography variant='subtitle1' className='subtitle'>Discover More</Typography>
            </Box>
        </Box >

    )
}

export default MenBanner
