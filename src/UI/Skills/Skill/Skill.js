import React from 'react';
import styles from './Skill.module.css';

function Skill(props) {
	return (
		<div className={styles.skill}>
			<div className={styles.card}>
				<div className={styles.front}>
					<div className={styles.frontContent}>
						<div className={styles.content}>{props.children}</div>
					</div>
				</div>
				<div className={styles.back}>
					<div className={styles.backContent}>
						<div className={styles.content}>{props.children}</div>
					</div></div>
			</div>
			<h3 className={styles.skillTitle}>{props.title}</h3>
			<span className={styles.description}>{props.description}</span>
		</div>
	);
}

export default Skill;


