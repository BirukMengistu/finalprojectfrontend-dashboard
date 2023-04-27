import PropTypes from 'prop-types';
import styles from '../styles/layout/container.module.css';
const Container = ({ children, customStyle }) => {
	return (
		<div className={styles['l-container']} style={customStyle}>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: PropTypes.node,
	customStyle: PropTypes.object
};

export default Container;
