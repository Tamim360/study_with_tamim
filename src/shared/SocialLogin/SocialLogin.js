import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <button className="btn btn-outline btn-primary rounded-full gap-2 btn-sm mt-2 font-bold">
            <FaGoogle className="" />
            Sign in with Google
        </button>
    );
};

export default SocialLogin;