import React from 'react';
import styles from './Header.module.css';
import {HeaderLink} from "./HeaderLink";

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.nav}>
					<HeaderLink togo={"home"} title={"Home"}/>
					<HeaderLink togo={"skills"} title={"Skills"}/>
					<HeaderLink togo={"projects"} title={"Projects"}/>
					<HeaderLink togo={"contact"} title={"Contacts"}/>
				</div>
			</div>
		</div>
	);
}

export default Header;
