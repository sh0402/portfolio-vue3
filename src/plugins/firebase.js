import Vue from 'vue';
import firebase from 'firebase/app';
// const firebase = require('firebase/app');
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const rdb = firebase.database();

firebase.auth().useDeviceLanguage();

if (location.hostname === 'localhost') {
	auth.useEmulator('http://localhost:9099');
	db.useEmulator('localhost', 8081);
	rdb.useEmulator('localhost', 9000);
}

Vue.prototype.$firebase = firebase;

export default firebase;
