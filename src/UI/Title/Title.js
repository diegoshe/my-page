import React from 'react';
import styles from './Title.module.css';

function Title(props) {
	return (
		<div className={styles.headerTitle}>
			<h2 className={styles.headerTitle}>{props.title}</h2>
			<div className={styles.line}>
			</div>
		</div>
	);
}

export default Title;
