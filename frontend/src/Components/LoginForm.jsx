import React from 'react';
import {motion} from 'framer-motion';

const LoginForm = () => {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}>
            <h1>Login form</h1>
        </motion.div>
    )
}

export default LoginForm