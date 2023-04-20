import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
export const AuthContext = createContext();

const auth = getAuth();

const AuthProvider = ({ children }) => {
    const user = { displayName: 'Batash ali' };

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { user, providerLogin };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;