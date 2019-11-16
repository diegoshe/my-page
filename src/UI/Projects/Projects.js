import React from 'react';
import styles from './Projects.module.css';
import Zoom from 'react-reveal/Zoom';
import Project from "./Project/Project";
import Title from '../Title/Title';
import imageStore from '../../img/store.jpg'
import imageList from '../../img/todolist.jpg'
import imageNetwork from '../../img/networck.jpg'

function Projects() {

	const backStore = {backgroundImage: `url(${imageStore})`}
	const backList = {backgroundImage: `url(${imageList})`}
	const backNetwork = {backgroundImage: `url(${imageNetwork})`}

  return (
    <div id="projects" className={styles.projects}>
	    <Zoom>
		    <div className={styles.container}>
			    <Title title={"My projects"}/>
			    <div className={styles.projectWrapper}>
				    <Project title={"Store Games"} style={backStore}
				             toGo={`https://store-games-express.herokuapp.com/`}
				             description={`The following technology stack was used in this project:
				     Node.js (Express), Handlebars, MongoDB, Mongoose, Heroku`}/>
				    <Project title={"Social Network"} style={backNetwork}
				    description={`Project in development ...`} />
				    <Project title={"To do list"} style={backList}
				             description={`Project in development ...`}/>
			    </div>
		    </div>
	    </Zoom>
    </div>
  );
}

export default Projects;
