import React from 'react';
import styles from './Main.module.css';
import Zoom from 'react-reveal/Zoom';


class Main extends React.Component {

		componentDidMount(){
			let card = document.querySelector("#photo");
			console.log(card)
			card.addEventListener('mousemove', startRotate);
			card.addEventListener('mouseout', stopRotate);
			function startRotate(event) {
				let cardItem = this.querySelector("#image");
				let halfHeight = cardItem.offsetHeight / 2;
				let halfWidth = cardItem.offsetWidth / 2;
				cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY( ' + (event.offsetX - halfWidth) / 5 + 'deg)';
			}
			function stopRotate() {
				let cardItem = this.querySelector("#image");
				cardItem.style.transform = 'rotateX(0)'
			}
		}
	render() {
		return (
			<div id="home" className={styles.main}>
				<div className={styles.container}>
					<Zoom>
						<div className={styles.greeting}>
							<span>Hello!</span>
							<span>My name Vitaliy <span>Slizh</span></span>
							<h1>I m front-end developer</h1>
						</div>
					</Zoom>
					<div className={styles.photo} id="photo">
						<div className={styles.image} id="image"/>
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
