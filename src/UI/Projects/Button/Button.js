import React from 'react';
import styles from './Button.module.css';

export function Button (props) {
	return (
		<div className={styles.wrapper}>
			<a href={props.toGo} className={styles.button} target="_blank" rel="noopener">
				<span className={`${styles.buttonLine} ${styles.top}`} />
				<span className={`${styles.buttonLine} ${styles.right}`} />
				<span className={`${styles.buttonLine} ${styles.bottom}`} />
				<span className={`${styles.buttonLine} ${styles.left}`} />
				Go to
			</a>
		</div>
	)
}
