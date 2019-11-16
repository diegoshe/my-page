import styles from "./Header.module.css";
import {Link} from "react-scroll/modules";
import React from "react";

export function HeaderLink(props) {
	return (
		<div className={styles.wrap}>
			<Link
				activeClass={styles.active}
				className={styles.link}
				to={props.togo}
				spy={true}
				smooth={true}
				offset={-30}
				duration={1300}
			>{props.title}</Link>
		</div>
	)
}
