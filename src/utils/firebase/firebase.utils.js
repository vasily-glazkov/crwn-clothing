import {initializeApp} from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBG9lyS-m3kNx_w9BymdN3X2K7S1sIZozY",
	authDomain: "clothing-shop-db-cc9dd.firebaseapp.com",
	projectId: "clothing-shop-db-cc9dd",
	storageBucket: "clothing-shop-db-cc9dd.appspot.com",
	messagingSenderId: "882339436985",
	appId: "1:882339436985:web:61be96a8effcbcc56d7e68"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid)
	
	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());
	
	if (!userSnapshot.exists()) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
}




