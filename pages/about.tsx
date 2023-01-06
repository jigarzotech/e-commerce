// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { itemData } from '../src/components/womenBanner/womenBannerData';
// import { Box, Typography } from '@mui/material';
// import { Colors } from '../src/components/theme/theme';
// import Image from 'next/image';

// const about = () => {
//   var settings: {
//     dots: boolean;
//     infinite: boolean;
//     speed: number;
//     autoplay: boolean;
//     autoplaySpeed: number;
//     slidesToShow: number;
//     slidesToScroll: number;
//     initialSlide: number
//   } = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0
//   };
//   return (
//     <div style={{ width: '60%',marginLeft:'50px' }}>

//       <Slider {...settings}>
//         {
//           itemData.map((item, index) => (
//             <Box className='slider' key={index}
//             // onMouseEnter={() => setShowOptions(true)}
//             // onMouseLeave={() => setShowOptions(false)}
//             >
//               <Box className='sliderImage'>

//                 <Image src={item.img} alt='img1' width={230}
//                   height={250} className='image' />
//               </Box >
//               <Typography variant='subtitle1' color={Colors.dim_grey} mt={2}>Tshirt</Typography>
//               <Typography variant='h5' color={Colors.black}>Light green Tshirt</Typography>
//               <Typography variant='h5' color={Colors.info} mt={1}>$ 10.00</Typography>
//             </Box >
//           ))
//         }

//       </Slider >

//     </div>
//   )
// }

// export default about