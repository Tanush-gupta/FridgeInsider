import auth from '@react-native-firebase/auth';
import db from '@react-native-firebase/database';
import { isValidEmail } from './FirebaseForgotPass';

export const createProfile = async (response, name, email) => {
    const { user } = response;
    const { uid, photoURL } = user;
    const displayName = name;
    // console.log(user);
    await db().ref(`/users/${uid}`).set({ displayName, email, photoURL, uid });
};

export const registerUserWithEmailAndPassword = async (email, password) => {
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password);
        // console.log('User account created & signed in!');
        return response;
    } catch (error) {
        throw error;
    }
};

export const sendEmailVerification = async (user,setError) => {
    try {
        if (user) {
            await user.sendEmailVerification();
            // console.log('Email verification sent');
        } else {
            throw new Error('User object is null or undefined');
        }
    } catch (error) {
        setError('Email verification failed');
        throw new Error('Email verification failed');
    }
};

const ClearInputFields = (setName, setEmail, setPassword, setConfirmPass) => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPass('');
};

export const handleSignup = async (email, password, name, confirmPass, setName, setEmail, setPassword, setConfirmPass, setLoading, setSuccess, setError, props) => {
    if (email && password && name && confirmPass) {
        if (password === confirmPass) {
            if (!isValidEmail(email)) {
                setError('Please enter a valid email address');
                return;
            }
            try {
                setLoading(true); // Start loader
                const response = await registerUserWithEmailAndPassword(email, password);
                if (response) {
                    await createProfile(response, name, email);
                    await sendEmailVerification(response.user,setError)
                        .then(() => {
                            ClearInputFields(setName, setEmail, setPassword, setConfirmPass);
                        })
                        .catch(() => {
                            setError('Email Verification Failed');
                        })
                        .finally(() => {
                            setLoading(false); // Stop loader
                            setSuccess(true);
                            setError('Email Verification Sent');
                            setTimeout(() => {
                                props.changeScreen('GetStarted'); // Change to verification screen
                            }, 1000);
                        });
                }
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    setError('That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                } else if (error.code === 'auth/weak-password') {
                    setError('Password should be at least 6 characters');
                } else {
                    setError('An error occurred during registration.');
                }
                setLoading(false); // Stop loader
                // console.error(error);
            }
        } else {
            setError('Password and Confirm Password do not match');
        }
    } else {
        setError('Please fill in all fields');
    }
};
