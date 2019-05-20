(function(){

	'use strict';

	/**
	 * Empty panorama
	 * @constructor
	 * @param {number} [radius=5000] - Radius of panorama
	 */
	PANOLENS.EmptyPanorama = function ( radius ) {

		radius = radius || 5000;

		var geometry = new THREE.BufferGeometry(),
			material = new THREE.MeshBasicMaterial( { 
				color: 0x000000, opacity: 1, transparent: true 
			} );

		geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array(), 1 ) );

		PANOLENS.Panorama.call( this, geometry, material );

	}

	PANOLENS.EmptyPanorama.prototype = Object.create( PANOLENS.Panorama.prototype );

	PANOLENS.EmptyPanorama.prototype.constructor = PANOLENS.EmptyPanorama;

})();