import cx from 'classnames';
import styles from '../../assets/styles/components/button.module.css';
import PropTypes from 'prop-types';
const Button = ({ variant, color, disabled, onClick, size, classname, label, customStyle, type = 'button', icon }) => {
	const _className = cx(classname, styles[size], styles.disabled, styles.button, styles[variant], styles[color]);
	return (
		<button type={type} className={_className} onClick={onClick} disabled={disabled} style={customStyle}>
			{' '}
			{label}
		</button>
	);
};
Button.propTypes = {
	classname: PropTypes.any,
	color: PropTypes.string,
	customStyle: PropTypes.object,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	onClick: PropTypes.func,
	size: PropTypes.string,
	type: PropTypes.string,
	variant: PropTypes.string
};
export default Button;
