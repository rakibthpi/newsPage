/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const UserProvider = createContext(null);

const AuthProvider = ({ children }) => {
    const authinfo = { displayName: "rakib fffff" };

    return (
        <UserProvider.Provider value={authinfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default AuthProvider;