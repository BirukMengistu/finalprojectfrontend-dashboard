import PropTypes from 'prop-types';
import styles from '../assets/styles/components/pagenav.module.css';
import { Link } from 'react-router-dom';

const PageNav = ({ path, text, src, alt = '', disabled, notification = false }) => {
	return (
		<div className={`${styles['c-site-nav']} ${disabled ? ['c-site-nav-disabled'] : ''} `}>
			<Link to={path} className={styles['c-site-nav-link']}>
				<div className={styles['c-site-nav-text']}>{text}</div>
				<img className={styles['c-site-nav-icon']} src={src} alt={alt} />
			</Link>
			{notification && <div className={styles['c-site-nav-notification']}> </div>}
		</div>
	);
};

PageNav.propTypes = {
	alt: PropTypes.string,
	disabled: PropTypes.bool,
	notification: PropTypes.bool,
	path: PropTypes.string,
	src: PropTypes.string,
	text: PropTypes.string
};

export default PageNav;
