import React, { Component } from 'react'
import { Entity } from 'aframe-react'
// Graphics:
import tomb from '../Graphic/grave.png'
import key from '../Graphic/car-key.png'
import car from '../Graphic/car.png'

// Sky:
import darkwoods from '../Sky/images/darkwoods.jpg';
import field from '../Sky/images/darkwoodsgirl.jpg';
import castle from '../Sky/images/castle.jpg';
// Music:
import musicBasement from './basement-storage.mp3'
// SFX:
import sfxIgnition from '../Graphic/car-ignition.wav';
import sfxLocked from '../Graphic/doorlocked.wav';



export default class Assets extends Component {
	render () {
		return (
			<a-assets>
				<audio id="click-sound" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
				<audio id="music" alt="" crossOrigin="anonymous" src={musicBasement} preload></audio>
				<img id="darkwoods" alt="" src={darkwoods} preload/>
				<img id="field" alt="" src={field} preload/>
				<img id="castle" alt="" src={castle} preload/>
				<audio id="sfx-ignition" alt="" src={sfxIgnition} preload></audio>
				<audio id="sfx-locked" alt="" src={sfxLocked} preload></audio>
				<img id="groundTexture" alt="" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
				<img id="tomb" alt="" src={tomb} preload/>
				<img id="key" alt="" src={key} preload/>
				<img id="car" alt="" src={car} preload/>
			</a-assets>
		)
	}
}


/*
<script id="link" type="text/html">
	<a-entity class="link"
		geometry="primitive: plane; height: 1; width: 1"
		material="shader: flat; src: ${thumb}"
		event-set__1="_event: mousedown; scale: 1 1 1"
		event-set__2="_event: mouseup; scale: 1.2 1.2 1"
		event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
		event-set__4="_event: mouseleave; scale: 1 1 1"
		set-image="on: click; target: #image-360; src: ${src}"
		sound="on: click; src: #click-sound"></a-entity>
</script>
 */

// <Entity
//   geometry={{primitive: 'plane', height: 1; width: 1}}
//   position={{x: 0, y: 0, z: -5}}
//   material={{shader: flat, src: tumb}}
//   />
