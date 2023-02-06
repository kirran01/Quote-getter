import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    return (
        <nav className='bg-teal-900'>
            <ul className='p-5'>
                <li className='md:invisible lg:invisible'>
                    <MenuIcon sx={{color:'white'}}/>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
