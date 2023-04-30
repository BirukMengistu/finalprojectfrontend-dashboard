import React from 'react';
import PropTypes from 'prop-types';
import style from '../../assets/styles/components/input.module.css';

const Input = ({ placeholder, type, name, register, validationOptions, ...props }) => {
	return (
		<input
			className={style['c-input']}
			placeholder={placeholder}
			type={type}
			{...register(name, validationOptions)}
			{...props}
		/>
	);
};

Input.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	register: PropTypes.func,
	type: PropTypes.string,
	validationOptions: PropTypes.object
};

export default Input;
