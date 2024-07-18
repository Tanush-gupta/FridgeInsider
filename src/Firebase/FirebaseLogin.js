import auth from '@react-native-firebase/auth';
import { isValidEmail } from './FirebaseForgotPass';

export const handleLogin = async (email, password, changeScreen, setLoadingModalVisible, setError) => {
    // console.log('Login Button Pressed');

    try {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoadingModalVisible(true); // Activate the loading spinner
        const response = await auth().signInWithEmailAndPassword(email, password);

        // console.log('email Verification Check:' + response.user.emailVerified);
        if (response && response.user.emailVerified) {
            console.log(response.user);
            setTimeout(() => {
                setLoadingModalVisible(false); // Deactivate the loading spinner
                changeScreen('Location');
            }, 500);
            // console.log('User Logged In');
        }
        else {
            setLoadingModalVisible(false);
            setError('Please Verify Your Email.');
        }
    } catch (error) {
        // console.log('error: ', error);
        setLoadingModalVisible(false);
        setError('Wrong credentials. Please try again.');
    } finally {
        setLoadingModalVisible(false);
    }
};
