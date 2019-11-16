import React from 'react';
import styles from './Contacts.module.css';
import Zoom from 'react-reveal/Zoom';
import Title from "../Title/Title";


function Contacts() {
  return (
    <div id="contact" className={styles.contacts}>
	    <Zoom>
		    <div className={styles.container}>
			    <Title title={"Contacts"} />
			    <form className={styles.formWrapper}>
				    <input className={styles.formArea} placeholder="Name" type="text"/>
				    <input className={styles.formArea} placeholder="e-mail" type="email"/>
				    <textarea className={styles.messageArea} placeholder="Message"/>
				    <button className={styles.btnSubmit} type="submit">To send</button>
			    </form>
		    </div>
	    </Zoom>
    </div>
  );
}

export default Contacts;
