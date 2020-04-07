/* Polyfills */
/* eslint-disable no-unused-vars */
import Promise from '../../../node_modules/promise-polyfill/promise';
import IntersectionObserver from '../../../node_modules/intersection-observer/intersection-observer';
import Fetch from '../../../node_modules/whatwg-fetch/fetch.js';
/* eslint-enable no-unused-vars */

/* Custom Modules */
import LazyLoad from './LazyLoad';
import FontsDetection from './FontsDetection';

// import ServiceWorkerRegistration from './ServiceWorkerRegistration';

( function() {
	LazyLoad.init();
	FontsDetection.init( [ 'Lato', 'Source Serif Pro' ] );

	// ServiceWorkerRegistration.init( '/sw.js' );
} )();
