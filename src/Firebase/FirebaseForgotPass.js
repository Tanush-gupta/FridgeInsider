import auth from '@react-native-firebase/auth';

export const handlePasswordReset = (email, setEmail, setError, setSuccess, setLoadingModalVisible) => {
    if (email === '') {
        setError('Please enter your email address');
    } else if (!isValidEmail(email)) {
        setError('Please enter a valid email address');
    } else {
        setLoadingModalVisible(true); // Show the loader

        auth().sendPasswordResetEmail(email)
            .then(() => {
                // console.log('Password reset email sent');
                setEmail('');
                setError('Password Reset Email Sent');
                setSuccess(true);
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setError('That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                } else {
                    setError('An error occurred during registration.');
                }
                // console.log('Error sending password reset email:', error);
            })
            .finally(() => {
                setLoadingModalVisible(false); // Hide the loader
            });
    }
};

export const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);
    const isDomainValid = true;
    return isEmailValid && isDomainValid;
};
