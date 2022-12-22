import React from 'react';

const Loading = () => {
    return (
        <div className="w-screen h-screen z-50 grid place-items-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400" bis_skin_checked="1"></div>
        </div>
    );
};

export default Loading;