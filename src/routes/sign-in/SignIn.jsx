import React from 'react';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	}

	const logGoogleRedirectUser = async () => {
		const {user} = await signInWithGoogleRedirect();
		console.log(user);
	}


	return (
		<div>
			<h2>Sign in page</h2>
			<button onClick={logGoogleUser}>Sign In With Google</button>
			<button onClick={logGoogleRedirectUser}>Sign In With Google Redirect</button>
		</div>
	);
};

export default SignIn;