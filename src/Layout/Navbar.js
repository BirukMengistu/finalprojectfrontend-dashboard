import { useNavigate } from 'react-router-dom';
import styles from '../styles/layout/navbar.module.css';
import  HamburgerMenu  from './HamburgerMenu';
import Logo from '../assets/images/navbar/hubLogo.svg';
import { Avatar, Flex } from '@mantine/core';
import { Auth } from '../hooks/utils'
const Navbar = () => {
	const  isAuth  = Auth.isAuth()
	
	const navigate = useNavigate();
	return (
		<div id='menuID' className={styles['l-navbar']}>
			<div className={styles.navbar}>
				<img
					className={styles['l-navbar-logo']}
					src={Logo}
					alt=''
					onClick={() => {
						navigate('/');
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							navigate('/');
						}
					}}
				/>
                <div style = {{display:'flex', alignItems : 'center'}}>
				
				{ isAuth && <Avatar radius='lg' src={null} alt="no image here" color="#FFF8E1" />}
				<HamburgerMenu />
				</div>
				
			</div>
		</div>
	);
};

export default Navbar;