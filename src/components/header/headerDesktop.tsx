import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Colors } from '../theme/theme';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useRouter } from 'next/router';

export const HeaderDesktop: React.FC = () => {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className='headerDesktop'>
            <Box className='headerTitle'>
                <Typography variant='h5' color={Colors.info} fontWeight={'bold'}>COLOSHOP</Typography>
            </Box>
            <List className='headerList'>
                <Link href='/'>
                    <ListItemText className='headerListItem' primary='Home'
                        sx={{ background: router.pathname === '/' && Colors.info }} /></Link>
                <Link href='/'>
                    <ListItemText className='headerListItem' primary='Shop' />
                </Link>
                <Link href=''>
                    <ListItemText className='headerListItem' primary='Collaction' />
                </Link>
                <Link href=''>
                    <ListItemText className='headerListItem' primary='Blog' />
                </Link>
                <Link href='/contact'>
                    <ListItemText className='headerListItem' primary='Contact'
                        sx={{ background: router.pathname === '/contact' && Colors.info }} />
                </Link>
                <Link href=''>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <ListItemText className='headerListItem' primary='Pages'
                            sx={{ background: router.pathname === '/shoppingcart' || router.pathname === '/checkout' || router.pathname === '/faqs' && Colors.info, color: 'white' }} />
                    </Button>
                    <Menu
                        className='Menu'
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>  <Link href='/shoppingcart'>
                            Shopping Cart
                        </Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href='/checkout'> Check Out </Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link href='/faqs'>FAQs</Link></MenuItem>

                    </Menu>
                </Link>

            </List>
            <List className='headerListAction'>
                <ListItemButton className='headerListActionBtn'>
                    <ListItemIcon className='headerListIcon'>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemIcon className='headerListIcon'>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemIcon className='headerListIcon'>

                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartIcon sx={{ color: "white" }} />
                        </Badge>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Box >
    );
};
