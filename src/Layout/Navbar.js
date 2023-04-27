import { useNavigate } from 'react-router-dom';
import styles from '../styles/layout/navbar.module.css';
import  HamburgerMenu  from './HamburgerMenu';
import Logo from '../assets/images/navbar/hubLogo.svg';
const Navbar = () => {
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
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default Navbar;