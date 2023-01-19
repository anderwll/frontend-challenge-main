import React from 'react';
import { Container } from './styled';
import { Menu } from '@mui/icons-material';
import TextButtonInput from '../TextButtonInput';

interface NavBarProps {
    menuOnClick: () => void,
    loginClick: () => void
}

const NavBar: React.FC<NavBarProps> = ({ menuOnClick, loginClick }) => {
    return (
        <Container>
            <Menu onClick={menuOnClick} />
            <TextButtonInput onClickLogin={loginClick} />
        </Container>
    );
};

export default NavBar;