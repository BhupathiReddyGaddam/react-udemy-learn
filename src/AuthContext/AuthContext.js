import React from 'react';

const AuthContext = React.createContext({
    authanticated: false,
    login: () => {}
});
export default AuthContext;