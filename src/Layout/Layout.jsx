
import { useMediaQuery } from '@mantine/hooks';
import PropTypes from 'prop-types';
import styles from '../styles/layout/layout.module.css'

import Navbar from './../Layout/Navbar';
import Container from './Container';


const Layout = ({ children }) => {
	const media = useMediaQuery('(max-width: 768px)');

	return (
		<div className={media ? styles.mobile : styles.desktop}>
			<div className={styles['l-content-wrapper']}>
				<div className={styles.navbar}>
					<Navbar />
				</div>
				<div className={styles.content}>
					<Container customStyle={{ flex: '1', justifyContent: 'flex-start', minHeight: '70vh' }}>
						{children}
					</Container>
					<div style={{ marginBottom: '20px' }} />
				</div>
				
			</div>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
