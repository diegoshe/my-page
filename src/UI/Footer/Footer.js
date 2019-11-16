import React from 'react';
import styles from './Footer.module.css';
import Zoom from 'react-reveal/Zoom';
import Title from "../Title/Title";
import {faGithub, faLinkedinIn, faFacebookF, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Footer() {
  return (
    <div className={styles.footer}>
	    <Zoom>
		    <div className={styles.container}>
			    <Title title={"Vitaliy"} />
			    <div className={styles.socialBlock}>
				    <a className={styles.ico} href="https://www.linkedin.com/in/%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-c%D0%BB%D0%B8%D0%B6-823984a7/" target="_blank" rel="noopener">
					    <div className={`${styles.socialIcon} ${styles.linkedIn}`}>
						    <FontAwesomeIcon icon={faLinkedinIn} />
					    </div>
				    </a>
				    <a  href="https://www.facebook.com/vitalik.slizh" target="_blank" className={styles.ico} rel="noopener">
					    <div className={`${styles.socialIcon} ${styles.fb}`}>
						    <FontAwesomeIcon icon={faFacebookF} />
					    </div>
				    </a>
				    <a className={styles.ico} href="https://github.com/diegoshe?tab=repositories" target="_blank" rel="noopener">
					    <div className={`${styles.socialIcon} ${styles.gh}`}>
						    <FontAwesomeIcon icon={faGithub} />
					    </div>
				    </a>
				    <a className={styles.ico} href="https://t.me/diegoshe" target="_blank" rel="noopener">
					    <div className={`${styles.socialIcon} ${styles.telegram}`} >
						    <FontAwesomeIcon icon={faTelegramPlane} />
					    </div>
				    </a>
			    </div>
			    <span className={styles.copyright}>@2019 All rights reserved</span>
		    </div>
	    </Zoom>
    </div>
  );
}

export default Footer;
