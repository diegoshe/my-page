import React from 'react';
import styles from './Project.module.css';
import {Button} from "../Button/Button";

function Project(props) {
	return (
		<div className={styles.project}>
			<div className={styles.wrapper}>
				<div className={styles.projectImg} style={props.style} />
				<div className={styles.btnShow}><Button {...props} /></div>
			</div>
			<div className={styles.context}>
				<span className={styles.projectTitle}>{props.title}</span>
				<span className={styles.description}>{props.description}</span>
			</div>

		</div>
	);
}

export default Project;
