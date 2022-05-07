import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase Creds
const firebaseConfig = {
	apiKey: 'AIzaSyAI2aT28LfeDyK2jUgj5MVNdimLGhavuhw',
	authDomain: 'spacewarlock-be0c8.firebaseapp.com',
	projectId: 'spacewarlock-be0c8',
	storageBucket: 'spacewarlock-be0c8.appspot.com',
	messagingSenderId: '303752937877',
	appId: '1:303752937877:web:4b61ba243b00a36389b69c',
	measurementId: 'G-7NXPYHV76E',
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: 'AIzaSyAVvhR6q4UP30Jhh-WC3BM_q9r5piKw-Os',
// 	authDomain: 'ctf-project-506a2.firebaseapp.com',
// 	databaseURL: 'https://ctf-project-506a2-default-rtdb.firebaseio.com',
// 	projectId: 'ctf-project-506a2',
// 	storageBucket: 'ctf-project-506a2.appspot.com',
// 	messagingSenderId: '1000485281635',
// 	appId: '1:1000485281635:web:2cca9fd134098cd8d37d56',
// 	measurementId: 'G-5G90VM9J68',
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
