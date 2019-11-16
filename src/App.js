import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from "./UI/Header/Header";
import Main from "./UI/Main/Main";
import Skills from "./UI/Skills/Skills";
import Projects from "./UI/Projects/Projects";
import Contacts from "./UI/Contacts/Contacts";
import Footer from "./UI/Footer/Footer";

const particleOpt = {
	"particles": {
		"number": {
			"value": 150,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#09d3ac"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 1,
				"color": "#09d3ac"
			},
			"polygon": {
				"nb_sides": 4
			}
		},
		"size": {
			"value": 1.5,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 60,
				"size_min": 0.9,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 100,
			"color": "#09d3ac",
			"opacity": 0.3687847739990702,
			"width": 0.6413648243462091
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": true,
			"attract": {
				"enable": true,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "bubble"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 3,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 60,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
}

function App() {
	return (
		<div className="App">
			<Particles className={'particles'} params={particleOpt}/>
			<Header/>
			<Main/>
			<Skills/>
			<Projects/>
			<Contacts/>
			<Footer/>
		</div>
	);
}

export default App;
