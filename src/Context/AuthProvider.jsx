import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user , setUser] =useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return  signInWithPopup(auth, googleProvider);
    }

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
            console.log('Current user:', currentUser);
        })
        return () => unsubscribe();
    },[])

    const authInfo ={
        user,
        setUser,
        loading,
        registerUser,
        signInUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;