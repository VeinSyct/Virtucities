import {
	StereoCamera,
	Vector2
} from './three.module.js';

class StereoEffect {

	constructor( renderer ) {

		const _stereo = new StereoCamera();
		_stereo.aspect = 0.5;
		const size = new Vector2();

		this.setEyeSeparation = function ( eyeSep ) {

			_stereo.eyeSep = eyeSep;

		};

		this.setSize = function ( width, height ) {

			renderer.setSize( width, height );

		};

		this.render = function ( scene, camera ) {

			if ( scene.matrixWorldAutoUpdate === true ) scene.updateMatrixWorld();

			if ( camera.parent === null && camera.matrixWorldAutoUpdate === true ) camera.updateMatrixWorld();

			_stereo.update( camera );

			renderer.getSize( size );

			if ( renderer.autoClear ) renderer.clear();
			renderer.setScissorTest( true );

			/* COMPOSER START HERE */

			if(_ez.vrSet===undefined) {

				_ez.vrSet=true

				setPostProcessing( _stereo.cameraR );

			}

			renderer.setScissor( 0, 0, size.width / 2, size.height );
			renderer.setViewport( 0, 0, size.width / 2, size.height );

			if(_lz.postprocessing && _ez.composer) {

				_ez.composer.render();

			} else {

				renderer.render( _ez.scene, _stereo.cameraL );

			}

			renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );
			renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );

			if(_lz.postprocessing && _ez.composer) {

				_ez.composer.render();

			} else {

				renderer.render( _ez.scene, _stereo.cameraR );

			}

			/* COMPOSER END HERE */

			renderer.setScissorTest( false );

		};

	}

}

export { StereoEffect };
