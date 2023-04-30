import PropTypes from 'prop-types';
import style from '../../assets/styles/components/input.module.css';

const Select = ({ placeholder, name, register, validationOptions, children, onchange, ...props }) => {
	return (
		<>
			<select
				onChange={onchange}
				className={style['c-select']}
				placeholder={placeholder}
				{...register(name, validationOptions)}
				{...props}
			>
				{children}
			</select>
		</>
	);
};

Select.propTypes = {
	children: PropTypes.any,
	name: PropTypes.any,
	onchange: PropTypes.any,
	placeholder: PropTypes.any,
	register: PropTypes.func,
	validationOptions: PropTypes.any
};
export default Select;
