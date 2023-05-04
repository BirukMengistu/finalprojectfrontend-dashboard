import { useState } from 'react';
import styles from '../assets/styles/components/welcomebox.module.css';
import useProfile from '../hooks/useProfile';
import { formatName, initials } from '../hooks/utils/index';
import { greetUser } from './helpers';

import { Auth } from '../hooks/utils'
const WelcomeBox = () => {
   const {userProfile} = useProfile()
   const {isAuth} = Auth.isAuth()
   const user =userProfile?.data
	return (
		<div className={styles['c-welcome']}>
			<h3 className={styles['c-welcome-tag']}>{greetUser()}</h3>
			<div className={styles['c-welcome-profile']}>
				<h3 className={styles['c-welcome-name']}>{''}</h3>
				{isAuth && user && (
					<img
						className={styles['c-welcome-avatar']}
						src={`https://avatars.dicebear.com/api/initials/${initials(user)}.svg?r=50&size=50&scale=100`}
						alt=''
					/>
				)}
			</div>
		</div>
	);
};

export default WelcomeBox;
