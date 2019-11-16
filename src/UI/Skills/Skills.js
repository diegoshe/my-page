import React from 'react';
import styles from './Skills.module.css';
import Zoom from 'react-reveal/Zoom';
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faReact, faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Skills() {
	return (
		<div id="skills" className={styles.skills}>
			<Zoom >
				<div className={styles.container}>
					<Title title={"My skills"}/>
					<div className={styles.skillsWrapper}>
						<Skill title={"HTML & CSS"}
						       description={`I understand the syntax and operation of HTML, CSS. 
						       Skills of using affordable and adaptive layout using css grid and flexbox`}
						><FontAwesomeIcon icon={faCode}/></Skill>
						<Skill title={"JavaScript"}
						       description={`Understanding the syntax and mechanisms of the 
						       JavaScript language, including closures, asynchrony, promises, DOM events`}
						><FontAwesomeIcon icon={faCodepen}/></Skill>
						<Skill title={"React & Redux"}
						       description={`Experience of using the React and Redux, Axios, 
						       Redux-thunk, Redux-form, restAPI libraries in practice`}
						><FontAwesomeIcon icon={faReact}/></Skill>
						<Skill title={"Git"}
						       description={`Experience with GIT`}
						><FontAwesomeIcon icon={faGithub}/></Skill>
					</div>
				</div>
			</Zoom>
		</div>
	);
}

export default Skills;
