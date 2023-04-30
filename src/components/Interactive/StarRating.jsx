import { useState } from 'react';
import styles from '../../assets/styles/components/starrating.module.css';

const StarRating = ({ rating, setRating }) => {
	const [hover, setHover] = useState(0);

	return (
		<>
			<div className={styles['star-rating']}>
				{[...Array(5)].map((star, index) => {
					index += 1;
					return (
						<button
							type='button'
							key={index}
							className={styles[index <= (hover || rating) ? 'on' : 'off']}
							onClick={() => setRating((prev) => (prev === index ? 0 : index))}
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(rating)}
						>
							<span className={styles.star}>&#9733;</span>
						</button>
					);
				})}
			</div>
		</>
	);
};

export default StarRating;
