import styles from '../assets/styles/components/pagetitle.module.css';


const PageTitle = ({ heading }) => {
	return (
		<div className={styles['c-page']}>

			<h1 className={styles['c-page-header']}>{heading}</h1>
		</div>
	);
};

export default PageTitle;
